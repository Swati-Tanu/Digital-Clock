let clock=function(){

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var half = "";
    if(hours>=12){
        half="PM";
    }else{
        half="AM";
    }

    document.querySelector("#hrs").innerText = hours;
    document.querySelector("#mins").innerText = minutes;
    document.querySelector("#secs").innerText = seconds;
    document.querySelector("#ampm").innerText = half;
    setInterval(clock,1000);
};

clock();