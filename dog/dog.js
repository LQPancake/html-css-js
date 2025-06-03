function getPic (){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        document.getElementById("pic").src = data.message
    })
}