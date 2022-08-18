
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let randomIndex = Math.floor(Math.random() * characters.length)

let passwordLength = 15
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length)
        return characters[randomIndex]
}

function getRandomPassword() {
    let newPassword = ""
    for (let i = 0; i < passwordLength; i++){
        newPassword += getRandomCharacter()
    }
    return newPassword
}

function generatePassword(){
    passwordOne.textContent = generatePasswordOne
    passwordTwo.textContent = generatePasswordTwo
}

let generatePasswordOne = getRandomPassword()
let generatePasswordTwo = getRandomPassword()

function regeneratePassword(){
    passwordOne.textContent = " "
    passwordTwo.textContent = " "
}

function submit(){
    generatePassword()
}

