let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;
let running = false;

let lapCounter = 1;

function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText =
    `${h}:${m}:${s}`;
}

function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startWatch(){

    if(!running){

        timer = setInterval(stopwatch,1000);

        running = true;
    }
}

function pauseWatch(){

    clearInterval(timer);

    running = false;
}

function resetWatch(){

    clearInterval(timer);

    running = false;

    hours = 0;
    minutes = 0;
    seconds = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML =
    `<div class="empty">No laps recorded</div>`;

    lapCounter = 1;

    document.getElementById("lapNote").value = "";
}

function addLap(){

    if(hours === 0 &&
       minutes === 0 &&
       seconds === 0){
        return;
    }

    const laps = document.getElementById("laps");

    if(lapCounter === 1){
        laps.innerHTML = "";
    }

    const note =
    document.getElementById("lapNote").value;

    const lapDiv =
    document.createElement("div");

    lapDiv.classList.add("lap-item");

    lapDiv.innerHTML = `

        <div class="lap-top">

            <div class="lap-number">
                LAP ${lapCounter}
            </div>

            <div>
                ${document.getElementById("display").innerText}
            </div>

        </div>

        <div class="lap-note">
            ${note || "No Note Added"}
        </div>

    `;

    laps.prepend(lapDiv);

    document.getElementById("lapNote").value = "";

    lapCounter++;
}