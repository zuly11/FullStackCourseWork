//https://www.acme-api.com/api/companies
let loadButton = document.querySelector("#loadButton");
let loadRandomButton = document.querySelector("#loadRandomButton");

console.log(loadButton);
console.log(loadRandomButton);

let list = document.querySelector("#usersList");
let h1 = document.querySelector("#randomH1");

loadButton.addEventListener("click", function () {
  loadUsers();
});

loadRandomButton.addEventListener("click", function () {
  loadRandomUser();
});

async function loadRandomUser() {
  let response = await fetch("https://www.acme-api.com/api/users/random");
  let user = await response.json();
  randomH1.innerText = user.fullName;
}

async function loadUsers() {
  let response = await fetch("https://www.acme-api.com/api/users");
  let data = await response.json();
  let users = data.users;
  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    let li = document.createElement("li");
    li.innerText = user.fullName;
    list.appendChild(li);
  }
}

let loadCompany1 = document.querySelector("#companyList");
let loadCompany = document.querySelector("#loadCompany");

loadCompany.addEventListener("click", function () {
  loadCompanies();
});

async function loadCompanies() {
  let response = await fetch("https://www.acme-api.com/api/companies");
  let user = await response.json();
  let company2 = [];
  for (let i = 0; i < user.length; i++) {
    company2.push(user[i].name);
    console.log(company2);
  }

  for (let i = 0; i < company2.length; i++) {
    let companies1 = company2[i];
    let li = document.createElement("li");
    li.innerText = companies1;
    loadCompany1.appendChild(li);
  }
}
