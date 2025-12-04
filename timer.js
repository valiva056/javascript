const timerDisplay=document.getElementById("timer")
const  startbtn=document.getElementById("start btn")
const pausebtn=document.getElementById("pause btn")
const resetbtn=document.getElementById("reset btn")
const sessionbtn=document.getElementById("sessiontitle")
 
let workDuration=25*60;
let shortbreakDuration=5*60;
let longbreakDuration=15*60;

let currentDuration=workDuration;
let timer;
let isrunning=false;
let sessioncount=0;
let currentmode="work"

function updateDisplay(){
    const minutes=Math.floor(currentDuration/60.toString().padStart(2,'0'))
    const seconds=(currentDuration%60.toString().padStart(2,'0'))
    timerDisplay.textContent=`${minutes}:${seconds}`
}
function switchMode(mode){
    currentmode=mode;
    switch(mode){
        case "work":
            currentDuration=workDuration;
            sessiontitle.textContent="work time!"
            break
        case "short":
            currentDuration=shortbreakDuration;
            sessiontitle.textContent="short break";
            break
        case "long":
            currentDuration=longbreakDuration;
            sessiontitle.textContent="long break"; 
            break       
    }
    updateDisplay();
}
function startTimer(){
    if(isrunning) return;
    isrunning=true;
    timer=setInterval(()=>{
        currentDuration--;
        updateDisplay();

    if (currentDuration <= 0) {
      clearInterval(timer);
      isRunning = false;

      if (currentMode === "work") {
        sessionCount++;
        if (sessionCount % 4 === 0) {
          switchMode("long");
        } else {
          switchMode("short");
        }
      } else {
        switchMode("work");
      }

      startTimer(); 
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isrunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isrunning = false;
  sessionCount = 0;
  switchMode("work");
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

switchMode("work");



    