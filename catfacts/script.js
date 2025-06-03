function getFact (){
    fetch('https://catfact.ninja/fact')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        document.getElementById("fact").innerText = data.fact;
    })
}