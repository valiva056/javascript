let hours=0 ,minutes=0, seconds=0;
let countdown;
function updateDisplay(){
    let h=String(hours).padStart(2, '0');
    let m=String(minutes).padStart(2, '0');
    let s=String(seconds).padStart(2, '0');
    document.getElementById('timer').textContent=`${h}:${m}:${s}`;
}
function addhour(){
    hours++;
    updateDisplay();
}
function addminutes(){
    if(minutes<59){
        minutes++;

    }else{
        minutes=0;
        hours++;
    }
    updateDisplay();
}
function addseconds(){
    if(seconds<59){
        seconds++;
    }else{
        seconds=0;
        minutes++;
    }
    updateDisplay();
}
function startTimer(){
    let totalseconds=hours*3600+minutes*60+seconds;
    clearInterval(countdown);
    countdown=setInterval(()=>{
        if(totalseconds<=0){
            clearInterval(countdown);
            document.getElementById('timer').textContent="00:00:00"
            alert("Timer's up")
            return;
        }
        totalseconds--;
        let h=Math.floor(totalseconds/3600);
        let m=Math.floor((totalseconds%3600)/60)
        let s=totalseconds%60;
        hours=h
        seconds=s
        minutes=m
        updateDisplay()
    },1000) 
}
updateDisplay()