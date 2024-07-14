const name = document.getElementById("name")
const email = document.getElementById("Email")
const address = document.getElementById("Address")
const age = document.getElementById("Age")
const phoneNumber = document.getElementById("phoneNumber")
const idIdentity = document.getElementById("Id-Identity")
const fnction = document.getElementById("fnction")

const usersSec = document.querySelector(".users-sec")

const addBtn = document.getElementById ("Add-member")


const tbody = document.getElementById("tbody")
const ditems = document.getElementById("ditems")

let arrLength  ;
let a_e ;
let arrI ;



let arr = []
if (localStorage.getItem("persons")){
    arr = JSON.parse(localStorage.getItem("persons"))
  
}


addBtn.onclick = function () {
    let newPerson = {
        name : name.value,
        email : email.value,
        address: address.value,
        age: age.value,
        phoneNumber: phoneNumber.value,
        idIdentity: idIdentity.value,
        fnction: fnction.value
    }
    
    if (a_e == "Edit") {
        arr[arrI] = newPerson
        addBtn.innerHTML = "Add"
        console.log(a_e)
        a_e = "Add"
    } else {
        arr.push(newPerson)
    }

    addElementToStorage(arr)
    addElementToPage (arr)
    getFromStorage (arr)
    resetInput()
}
addElementToPage (arr)


function addElementToStorage (arr){
    localStorage.setItem("persons",JSON.stringify(arr))
}



function addElementToPage (arr) {
    arrLength = arr.length
    tbody.innerHTML = ""
    let div = ""
    for (i = 0 ; i< arr.length; i++){
        div += `
        <tr>
        <td>${i+1}</td>
        <td>${arr[i].name}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].address}</td>
        <td>${arr[i].age}</td>
        <td>${arr[i].phoneNumber}</td>
        <td>${arr[i].idIdentity}</td>
        <td>${arr[i].fnction}</td>
        <td > <div>  <button onclick="editItem(${i})" id="Eitems">Edit</button>
        <button onclick="delItem(${i})" id="ditems">Delete</button></div>
        </td>
        </tr>
        `
    }
    arrI = i;
    tbody.innerHTML += div
    let DeleteBtn = `<button onclick="deleteItems()">Delete All (${arr.length})</button>`
    if (arr.length > 0){
        deleteAll.innerHTML = DeleteBtn
        usersSec.style.display = "block"
    }else {
        deleteAll.innerHTML = ""
        usersSec.style.display = "none"


    }


}

function deleteItems () {
   
    arr.splice(0)
    localStorage.clear()
    addElementToPage (arr)

}


function getFromStorage (arr) {
    let data = localStorage.getItem("persons")
    if (data) {
        arr = JSON.parse(data)
    }
}




function resetInput () {
    name.value = ""
    email.value = ""
    address.value = ""
    age.value = ""
    phoneNumber.value = ""
    idIdentity.value = ""
    fnction.value = ""
}



function delItem(i) {
    arr.splice([i],1)
    addElementToPage (arr)
    addElementToStorage (arr)
    console.log(i)
    console.log(arr)
}


function editItem(i) {
    name.value = arr[i].name
    email.value = arr[i].email
    address.value = arr[i].address
    age.value = arr[i].age
    phoneNumber.value = arr[i].phoneNumber
    idIdentity.value = arr[i].idIdentity
    fnction.value = arr[i].fnction
    
    
    addBtn.innerHTML = "Edit"
    a_e = "Edit"
    arrI = i
    console.log (arrI)

    
}