'use strict';
const box = document.getElementById('box'); // const olyan valtozot lehet letrehozni, amit nem lehet felulirni
function colorChanged(event){
    box.style.backgroundColor = event.target.value;
}
function onWidthChanged(event){
    box.style.width = `${event.target.value}px`; // alt gr 7 `
}
function onHeightChanged(event){
    box.style.height = `${event.target.value}px`;
}
function onBorderRadiusChanged(event){
    box.style.borderRadius = event.target.value;
}
function onContentChanged(event){
    box.innerHTML = event.target.value;
}
function onMainClick(event){
    const translateX = event.clientX - (box.offsetLeft + box.offsetwidth / 2);
    const translateY = event.clientY - (box.offsetTop + box.offsetHeight / 2);
    box.style.transform = `translate(${translateX}px, ${translateY}px)`;
}
function reset(){
    window.location.reload();
}