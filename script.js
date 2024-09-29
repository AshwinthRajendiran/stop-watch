const playbutton=document.getElementsByClassName("play")[0];
const resetbutton=document.getElementsByClassName("reset")[0];
const lapbutton=document.getElementsByClassName("lap")[0];
const second=document.getElementsByClassName("sec")[0];
const minute=document.getElementsByClassName("min")[0];
const hour=document.getElementsByClassName("hor")[0];
const centi=document.getElementsByClassName("cs")[0];
const laps=document.getElementsByClassName("laps")[0];
const lapclearbutton=document.getElementsByClassName("lap-clear-button")[0];
const bg=document.getElementsByClassName("outer-circle")[0];

let isplay=false; 
let isreset=false;
let seccounter=0;
let sec;
let mincounter=0;
let min;
let hourcounter=0;
let hor;
let centicounter=0;
let centisec;
let lapitem=0;

const togglebutton = ()=>{
    lapbutton.classList.remove("hidden");
    resetbutton.classList.remove("hidden");
}


const play = ()=>{
    if(!isplay && !isreset){
        playbutton.innerHTML="pause";
        bg.classList.add("animation-bg");

        // centisec = setInterval(() => {
        //     if (centicounter === 1000) {
        //         centicounter = 0;
        //     }
        //     centi.innerHTML = ++centicounter ; //for setting centi sec counter
        // }, 1);
        
        // sec = setInterval(() => {
        //     if (seccounter === 60) {
        //         seccounter = 0;
        //     }
        //     second.innerHTML =`${ ++seccounter} :`; //for setting sec counter
        // }, 1000);
        
        // min = setInterval(() => {
        //     if (mincounter === 60) {
        //         mincounter = 0;
        //     }
        //     minute.innerHTML = `${++mincounter} :`; //for setting min counter
        // }, 60000); // 60 seconds = 60000 milliseconds
        
        // hor = setInterval(() => {
        //     if (hourcounter === 24) {
        //         hourcounter = 0;
        //     }
        //     hour.innerHTML = `${++hourcounter} :`; //for setting hour counter
        // }, 3600000); // 60 minutes = 3600000 milliseconds

        centisec = setInterval(() => {
            if (centicounter === 100) {
                centicounter = 0;
                // Increment the second counter after 100 centiseconds (1 second)
                if (seccounter === 60) {
                    seccounter = 0;
                    // Increment the minute counter after 60 seconds
                    if (mincounter === 60) {
                        mincounter = 0;
                        // Increment the hour counter after 60 minutes
                        if (hourcounter === 24) {
                            hourcounter = 0;
                        }
                        hour.innerHTML = `&nbsp${++hourcounter} :`; // Set hour counter
                    }
                    minute.innerHTML = `&nbsp${++mincounter} :`; // Set minute counter
                }
                second.innerHTML = `&nbsp${++seccounter} :`; // Set second counter
            }
            centi.innerHTML = ++centicounter; // Set centisecond counter
        }, 10); // 10 ms = 1 centisecond
        
        // Second counter (1 second = 1000 centiseconds)
        sec = setInterval(() => {
            if (seccounter === 60) {
                seccounter = 0;
            }
            second.innerHTML = `${++seccounter} :`; // Set second counter
        }, 10000); // 10000 ms = 1000 centiseconds
        
        // Minute counter (60 seconds = 60000 milliseconds)
        min = setInterval(() => {
            if (mincounter === 60) {
                mincounter = 0;
            }
            minute.innerHTML = `${++mincounter} :`; // Set minute counter
        }, 60000); // 60000 ms = 60 seconds
        
        // Hour counter (60 minutes = 3600000 milliseconds)
        hor = setInterval(() => {
            if (hourcounter === 24) {
                hourcounter = 0;
            }
            hour.innerHTML = `${++hourcounter} :`; // Set hour counter
        }, 3600000); // 3600000 ms = 60 minutes

    
        isplay=true;
    }
    else{
        playbutton.innerHTML="play";
        clearInterval(sec);
        clearInterval(min);
        clearInterval(hor);
        clearInterval(centisec);
        isplay=false;
        isreset=false;
        bg.classList.remove("animation-bg");
    }

    togglebutton();
}

const reset= ()=>{
    isreset=true;
    play();
    second.innerHTML=` 0 :`;
    minute.innerHTML=` 0 :`;
    hour.innerHTML=` 0 :`;
    centi.innerHTML=` 0 `;
    lapbutton.classList.add("hidden");
    resetbutton.classList.add("hidden");
}

const lap=()=>{
    const li=document.createElement("li");
    const number=document.createElement("span");
    const timestamp=document.createElement("sapn");

    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    timestamp.setAttribute("class","timestamp");
    
    number.innerHTML=`#${++lapitem}`;
    timestamp.innerHTML=`${hourcounter} : ${mincounter} : ${seccounter} : ${centicounter} `;

    li.append(number,timestamp);
    laps.append(li);

    lapclearbutton.classList.remove("hidden");
}

const clearall=()=>{
    laps.innerHTML='';
    laps.append(lapclearbutton);
    lapclearbutton.classList.add("hidden");
    lapitem=0;
}


playbutton.addEventListener("click",play);
resetbutton.addEventListener("click",reset);
lapbutton.addEventListener("click",lap);
lapclearbutton.addEventListener("click",clearall);