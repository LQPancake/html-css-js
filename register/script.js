document.getElementById("testData").addEventListener("click", async (e) => {
    e.preventDefault();

    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const u = data.results[0];

    document.getElementById("name").value = `${u.name.title} ${u.name.first} ${u.name.last}`;

    if (u.gender === "male") {
        document.querySelectorAll(".gender")[0].checked = true;
    } else {
        document.querySelectorAll(".gender")[1].checked = true;
    }

    document.getElementById("birthDate").value = u.dob.date.split("T")[0];

    document.querySelector('.residence[placeholder="Ország"]').value = u.location.country;
    document.querySelector('.residence[placeholder="Város"]').value = u.location.city;

    document.getElementById("email").value = u.email;
    document.getElementById("phoneNumber").value = u.phone;
    document.getElementById("username").value = u.login.username;
    document.getElementById("password").value = u.login.password;

    document.getElementById("profilePicture").src = u.picture.large;
});
