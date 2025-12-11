document.getElementById("testData").addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const u = data.results[0];

    document.getElementById("name").value = `${u.name.title} ${u.name.first} ${u.name.last}`;
    document.getElementById("email").value = u.email;
    document.getElementById("profilePicture").src = u.picture.large;
});
