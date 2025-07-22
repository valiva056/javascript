let button=document.getElementsByClassName("btn")

let screen=document.getElementById("screen")
 let text=""
 for(let i of button){
 i.onclick=()=>{
    if(i.innerHTML=="1"|| i.innerHTML=="2"|| 
        i.innerHTML=="3"|| i.innerHTML=="4"||
         i.innerHTML=="5"|| i.innerHTML=="6"
        || i.innerHTML=="7"|| i.innerHTML=="8"|| 
        i.innerHTML=="9"|| i.innerHTML=="0")
        {
        text+=i.innerHTML
        screen.innerHTML=text
      }else if(i.innerHTML=="+"|| i.innerHTML=="-"|| 
        i.innerHTML=="*"|| i.innerHTML=="/"|| i.innerHTML=="."){
        text+=i.innerHTML
        screen.innerHTML=text
    }else if(i.innerHTML=="c"){
        text=" "
        screen.innerHTML=text
    }else if(i.innerHTML=="X"){
        text=text.slice(0,text.lenght-1)
        screen.innerHTML=text
    }else if(i.innerHTML=="="){
        text=eval(text)
        screen.innerHTML=text
    }
}
 }