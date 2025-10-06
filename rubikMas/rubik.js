// 1.
const cimkep = document.getElementById('cimkep');
  cimkep.onmousemove = function (){
    cimkep.src = "hatterkocka.png";
};
  cimkep.onmouseout = function (){
    cimkep.src = "sematikus.png";}
// 2.    
const erdekessegek = document.querySelectorAll('.erdekesseg');
for (const erdekesseg of erdekessegek){
    erdekesseg.onclick = function(event){
      erdekesseg.classList.toggle('nagyobb');
    }
}
// 3.
const szul_ev=document.getElementById('szul_ev').value;
szul_ev.onsubmit=function(event){
    event.preventDefault();
if (szul_ev > 1975){
    let hanyEves = szul_ev - 1975;
    document.querySelector("szul_ev").innerText = "Már ", hanyEves, "éve létezett a Rubik-kocka, amikor megszülettél.";
}
}