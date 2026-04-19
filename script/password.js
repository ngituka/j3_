document.addEventListener("DOMContentLoaded", (e)=>{
    const input = document.getElementById("password");
    const button = document.getElementById("submit");
    button.addEventListener("click", ()=>checkPassword(input));
})

function checkPassword(input){
    console.log("clic reçu");
    if (input.value == "0607"){
        console.log("mdp ok");
        window.location.replace("accueil.html");
    }
    else{
        const section = input.parentElement;
        const text = document.createElement("p");
        text.innerText = "Le mot de passe est erroné.";
        text.className = "error";
        section.appendChild(text);
    }
}

