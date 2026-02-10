let ipcim = ""
fetch("https://api.ipify.org/?format=json")
.then(res => res.json())
.then(data => {
    ipcim = data.ip;
    fetch(`https://ipinfo.io/${ipcim}/geo`)
    .then(response = response.json)
    .then(data => {
        document.getElementsById("data").innerHTML = `<p>${data.hostname}</p>`
    })
})
