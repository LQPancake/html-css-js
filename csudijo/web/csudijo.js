fetch("/api/legnepszerubb")
.then(data => data.json())
.then(data =>{
    document.getElementById("legnepszerubb").innerText = data.etelNev;
})