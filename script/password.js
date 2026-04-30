let premiereErreur = true;
const hashedCode = "3ccea2709a37bffe05a833dc09c4ba2c7571a853db13b5885aa59611924511bc";

document.addEventListener("DOMContentLoaded", (e)=>{
    const input = document.getElementById("password");
    const button = document.getElementById("submit");
    button.addEventListener("click", ()=>checkPassword(input));
})

async function hashCode(message) {
    // 1. Convertir le texte en unités de calcul (Uint8Array)
    const msgUint8 = new TextEncoder().encode(message);                           
    
    // 2. Calculer le hash via l'API Web Crypto
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           

    // 3. Convertir le résultat (ArrayBuffer) en tableau d'octets
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     

    // 4. Transformer chaque octet en sa valeur hexadécimale (00 à ff)
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); 
    
    return hashHex;
}

async function checkPassword(input){
    console.log("clic reçu");
    if(input.value.length < 4) return;
    let password = await hashCode(input.value);
    if (password == hashedCode){
        sessionStorage.setItem("access_granted", "true");
        window.location.href = "accueil.html";
    }
    else{
        const section = input.parentElement;
        const text = document.createElement("p");
        text.innerText = "Le mot de passe est erroné.";
        text.className = "error";
        if (premiereErreur){
            section.appendChild(text);
            premiereErreur = false;
        }
    }
}

