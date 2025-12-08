document.getElementById("fetch-posts").onclick = function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => JSON.parse(response))
    .then((data)=>console.log(data));
}