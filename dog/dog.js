function getPic1(){
    fetch('https://dog.ceo/api/breed/akita/images/random')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        document.getElementById("pic").src = data.message;
    })
}
function getPic2(){
    fetch('https://dog.ceo/api/breed/african/images/random')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        document.getElementById("pic").src = data.message;
    })
}
function getPic3(){
    fetch('https://dog.ceo/api/breed/beagle/images/random')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        document.getElementById("pic").src = data.message;
    })
}
function getPic4(){
    fetch('https://dog.ceo/api/breed/boxer/images/random')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        document.getElementById("pic").src = data.message;
    })
}

const gombok = document.querySelectorAll('#gombok button');
gombok.forEach(gomb => {
    gomb.onmouseover = function() {
        gomb.style.backgroundColor = "#a5a5a5";
    };
    gomb.onmouseout = function() {
        gomb.style.backgroundColor = "#cccccc";
    };
});
