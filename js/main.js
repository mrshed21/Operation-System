const name = document.getElementById("name")
const email = document.getElementById("Email")
const address = document.getElementById("Address")
const age = document.getElementById("Age")
const phoneNumber = document.getElementById("phoneNumber")
const idIdentity = document.getElementById("Id-Identity")
const fnction = document.getElementById("fnction")

const addBtn = document.getElementById ("Add-member")


const tbody = document.getElementById("tbody")
const ditems = document.getElementById("ditems")

let arrLength  ;



let arr = []
if (localStorage.getItem("persons")){
    arr = JSON.parse(localStorage.getItem("persons"))
    console.log(arr)
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
    
    arr.push(newPerson)
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
                <td > <div>  <button>Edit</button>
                        <button  id="ditems">Delete</button></div>
                </td>
            </tr>
        `
    }
    tbody.innerHTML += div
    let DeleteBtn = `<button onclick="deleteItems()">Delete All (${arr.length})</button>`
    if (arr.length > 0){
        deleteAll.innerHTML = DeleteBtn
    }else {
        deleteAll.innerHTML = ""
    }


}

function deleteItems () {
    console.log("hello")
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



