const name = document.getElementById("name")
const email = document.getElementById("Email")
const address = document.getElementById("Address")
const age = document.getElementById("Age")
const phoneNumber = document.getElementById("phoneNumber")
const idIdentity = document.getElementById("Id-Identity")
const fnction = document.getElementById("fnction")

const addBtn = document.getElementById ("Add-member")


let arr = []

addBtn.onclick = function () {
    let newPeron = {
        name : name.value,
        email : email.value,
        address: address.value,
        age: age.value,
        phoneNumber: phoneNumber.value,
        idIdentity: idIdentity.value,
        fnction: fnction.value
    }
    arr.push(newPeron)
    


    resetInput()
    console.log(arr)
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