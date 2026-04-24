// On vérifie si une preuve de connexion existe dans le navigateur
if (sessionStorage.getItem("access_granted") !== "true") {
    // Si non, on redirige vers l'index immédiatement
    window.location.href = "index.html";
}

function getTime(){
    let today = new Date();
    let wedding = new Date(2026,7,8,11,0,0);
    let diff = wedding-today;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (days.toString().length == 1){
        days = "0" + days;
    }
    if (hours.toString().length == 1){
        hours = "0" + hours;
    }
    if (minutes.toString().length == 1){
        minutes = "0" + minutes;
    }
    if (seconds.toString().length == 1){
        seconds = "0" + seconds;
    }

    if(days<0){
        days = "00";
    }
    if(hours<0){
        hours = "00";
    }
    if(minutes<0){
        minutes = "00";
    }
    if(seconds<0){
        seconds = "00";
    }
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".mins").innerHTML = minutes;
    document.querySelector(".secs").innerHTML = seconds;
}   
setInterval(getTime, 1000);

function toggleTheme(){
    x = document.querySelector(".content");
    if (x.style.maxHeight){
      x.style.maxHeight = null;
    } else {
      x.style.maxHeight = x.scrollHeight + "px";
    }
}

function copyText(el){
    let text = el.innerText;
    navigator.clipboard.writeText(text);
}