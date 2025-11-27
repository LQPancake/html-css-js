state = {
  workers: [
    {
      id: crypto.randomUUID(),
      name: "Miss Madelen Årdal",
      city: "Eggkleiva",
      email: "madelen.ardal@example.com",
      picture: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Miss Nila Rugland",
      city: "Sommarøy",
      email: "nila.rugland@example.com",
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Mr Diego Aanestad",
      city: "Fuglevik",
      email: "diego.aanestad@example.com",
      picture: "https://randomuser.me/api/portraits/men/83.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Mr Nikolai Lidal",
      city: "Liland",
      email: "nikolai.lidal@example.com",
      picture: "https://randomuser.me/api/portraits/men/82.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Ms Goda Skinnes",
      city: "Bjørkelangen",
      email: "goda.skinnes@example.com",
      picture: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Ms Mari Abdirahman",
      city: "Øyenkilen",
      email: "mari.abdirahman@example.com",
      picture: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Mr Stanislaw Sørheim",
      city: "Porsgrunn",
      email: "stanislaw.sorheim@example.com",
      picture: "https://randomuser.me/api/portraits/men/87.jpg",
    },
    {
      id: crypto.randomUUID(),
      name: "Ms Thelma Hope",
      city: "Skre",
      email: "thelma.hope@example.com",
      picture: "https://randomuser.me/api/portraits/women/19.jpg",
    },
  ],
};
function renderWorkers() {
  let workers = document.getElementById("workers");
  workerHtml = '<div class="row">';
  for (const worker of state.workers) {
    workerHtml += `
        <div class="col-md-3 mb-4">
         <div class="card">
                    <img src="${worker.picture}" alt="">
                    <h3> ${worker.city}</h3>
                    <p>${worker.name}</p>
                    <p id="email">${worker.email}</p> 
                    <button class="btn btn-danger float-right delete-worker" data-workerid="${worker.id}">Törlés</button>   
                </div>
            </div>`;
  }
  workerHtml += "</div>";
  document.getElementById("worker-list-component").innerHTML = workerHtml;
for (const deleteBtn of document.querySelectorAll(".delete-worker")) {
  deleteBtn.onclick = function (event) {
    let id = event.target.dataset.workerid;
    let foundIndex;
    for (let index = 0; index < state.workers.length; index++) {
      if (state.workers[index].id == id) {
        foundIndex = index;
        break;
      }
    }
    state.workers.splice(foundIndex, 1);
    renderWorkers();
  };
}
}

window.onload = renderWorkers();
document.getElementById("create-worker").onsubmit = (event) => {
  event.preventDefault();
  const id = crypto.randomUUID();
  const picture = event.target.elements.picture.value;
  const city = event.target.elements.city.value;
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  state.workers.push({
    id,
    picture,
    city,
    name,
    email,
  });
  renderWorkers();
};
