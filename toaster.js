let style = `.toast{
width: 270px;
height: 40px;
padding: 0px;
margin: 0px 0px 20px 0px;
overflow: hidden;
box-shadow: 0px 3px 4px #2223;
border-radius: 6px;
background-color: #eee;
color: #222;
text-align: center;
font-family: sans-serif;
position: relative;
top: 0px;
right: 0px;
transition: all 0.2s ease;
animation-fill-mode: forwards;
}
.toast:hover{
background-color: #ddd;
transform: translateY(-3px);
}
.message{
margin: 8px auto 9px auto;
}
.timer-wrapper{
width: 100%;
height: 5px;
}
.timer{
width: 100%;
height: 100%;
background-color: rgb(255, 94, 66);
float: right;
animation-fill-mode: forwards;
border-radius: 10px;
}
@keyframes shrink{
from{
width: 100%;
}
to{
width: 0%;
}
}
@keyframes left-in{
from{
right: -100px;
opacity: 0;
}
to{
right: 0px;
opacity: 1;
}
}
.toaster{
overflow: hidden;
position: absolute;
top: 10px;
right: 10px;
z-index: 9999;
}`;

let styleTag = document.createElement('style');
styleTag.innerHTML = style;
document.head.appendChild(styleTag);

function toast(type,msg,time,clickCallback = ()=>{},toaster = ".toaster"){
    let timerColor = null;
    if (type == "info"){
        timerColor = "rgb(19, 147, 227)";    
    }
    else if(type == "success"){
        timerColor = "rgb(0, 179, 69)";    
    }
    else if(type == "error"){
        timerColor = "rgb(255, 94, 66)";
    }
    else if(type == "warn"){
        timerColor = "rgb(255, 179, 0)";
    }
    else{
        timerColor = "rgb(0, 0, 0)";
    }
    let template = `<div class="message">${msg}</div><div class="timer-wrapper"><div class="timer" style="animation: shrink ${time}s linear;background-color: ${timerColor}"></div></div>`;
    let _toaster = document.querySelector(toaster);
    if(!_toaster){
        let nt = document.createElement("div");
        nt.className = "toaster";
        document.body.appendChild(nt);
        _toaster = document.querySelector(toaster);
    }
    let div = document.createElement("div");
    div.style.animation= `left-in 0.2s ease, left-in 0.3s ease-out ${time-0.3}s reverse`;
    div.className = "toast";
    div.onclick = (e) => {
        clickCallback(e);
        div.remove();
    };
    div.innerHTML = template;
    div.id = Math.floor(Math.random() * 1000000) + 100000;
    _toaster.appendChild(div);
    if (_toaster.children.length > 5) {
        _toaster.removeChild(_toaster.firstChild);
    }
    window.setTimeout(function(){div.remove();},time*1000);
}