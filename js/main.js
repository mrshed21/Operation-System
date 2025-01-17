const name = document.getElementById("name");
const email = document.getElementById("Email");
const address = document.getElementById("Address");
const age = document.getElementById("Age");
const phoneNumber = document.getElementById("phoneNumber");
const idIdentity = document.getElementById("Id-Identity");
const jobfnction = document.getElementById("fnction");
const deleteBtn = document.getElementById("deleteBtn");

const tBody = document.getElementById("tbody");
const usersSec = document.getElementById("users-sec");

const addBtn = document.getElementById("Add-member");
const deleteAllBtn = document.getElementById("deleteAll");

const searchNm = document.getElementById("Search-nm");
const inputSearch = document.getElementById("input-search");

let arr = [];
if (localStorage.dataLocal != null) {
  arr = JSON.parse(localStorage.getItem("dataLocal"));
} else {
  arr = [];
}

let a_e = "add";
let iValue;
addBtn.onclick = () => {
  let userObject = {
    name: name.value.toLowerCase(),
    email: email.value,
    address: address.value,
    age: age.value,
    phoneNumber: phoneNumber.value,
    idIdentity: idIdentity.value.toLowerCase(),
    jobfnction: jobfnction.value,
  };
  if (name.value != "" && idIdentity.value != "") {
    if (a_e == "add") {
      arr.push(userObject);
    } else {
      arr[iValue] = userObject;
      addBtn.innerHTML = "add";
      a_e = "add";
    }
    resetValue();
  }

  localStorage.setItem("dataLocal", JSON.stringify(arr));

  showData();
};

function resetValue() {
  name.value = "";
  email.value = "";
  address.value = "";
  age.value = "";
  phoneNumber.value = "";
  idIdentity.value = "";
  jobfnction.value = "";
}

function showData() {
  let dataTable = "";
  for (let i = 0; i < arr.length; i++) {
    dataTable += `
        <tr>
              <td>${i + 1}</td>
              <td>${arr[i].name}</td>
              <td>${arr[i].email}</td>
              <td>${arr[i].address}</td>
              <td>${arr[i].age}</td>
              <td>${arr[i].phoneNumber}</td>
              <td>${arr[i].idIdentity}</td>
              <td>${arr[i].jobfnction}</td>
              <td><button onclick= "editData (${i})">edit</button></td>
              <td><button onclick="deleteItem (${i})" id="deleteBtn">delete</button></td>
        </tr>
    
    `;
  }
  if (arr.length > 0) {
    usersSec.style.display = "block";

    deleteAllBtn.innerHTML = `
        <button onclick="deleteAllItem ()" >delete all (${arr.length})  </button>
    `;
  } else {
    usersSec.style.display = "none";
    deleteAllBtn.innerHTML = "";
  }
  tBody.innerHTML = dataTable;
}

showData();

function deleteItem(i) {
  arr.splice(i, 1);
  localStorage.dataLocal = JSON.stringify(arr);
  showData();
}

function deleteAllItem() {
  localStorage.clear();
  arr = [];
  showData();
}

function editData(i) {
  name.value = arr[i].name;
  email.value = arr[i].email;
  address.value = arr[i].address;
  age.value = arr[i].age;
  phoneNumber.value = arr[i].phoneNumber;
  idIdentity.value = arr[i].idIdentity;
  jobfnction.value = arr[i].jobfnction;
  iValue = i;
  a_e = "edit";

  addBtn.innerHTML = "Edit Data";
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

let searchMode = "name";

function SearchType(id) {
  if (id === "Search-nm") {
    searchMode = "name";
  } else {
    searchMode = "id";
  }
  inputSearch.placeholder = "Search in users by " + searchMode;
  inputSearch.value = "";
  inputSearch.focus();
  showData();
}

function SearchInData(value) {
  let dataTable = "";
  for (let i = 0; i < arr.length; i++) {
    if (searchMode === "name") {
      if (arr[i].name.includes(value.toLowerCase())) {
        dataTable += `
                  <tr>
                        <td>${i + 1}</td>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].email}</td>
                        <td>${arr[i].address}</td>
                        <td>${arr[i].age}</td>
                        <td>${arr[i].phoneNumber}</td>
                        <td>${arr[i].idIdentity}</td>
                        <td>${arr[i].jobfnction}</td>
                        <td><button onclick= "editData (${i})">edit</button></td>
                        <td><button onclick="deleteItem (${i})" id="deleteBtn">delete</button></td>
                  </tr>
              
              `;
      }
    } else {
      if (arr[i].idIdentity.includes(value.toLowerCase())) {
        dataTable += `
              <tr>
                    <td>${i + 1}</td>
                    <td>${arr[i].name}</td>
                    <td>${arr[i].email}</td>
                    <td>${arr[i].address}</td>
                    <td>${arr[i].age}</td>
                    <td>${arr[i].phoneNumber}</td>
                    <td>${arr[i].idIdentity}</td>
                    <td>${arr[i].jobfnction}</td>
                    <td><button onclick= "editData (${i})">edit</button></td>
                    <td><button onclick="deleteItem (${i})" id="deleteBtn">delete</button></td>
              </tr>
          
          `;
      }
    }
  }
  tBody.innerHTML = dataTable;
}
