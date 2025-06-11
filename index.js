const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]



function generatePassword(){
    let firstPasswordEl = document.getElementById("password-first")
    let secondPasswordEl = document.getElementById("password-second")
    let passwordOne = [] //using an empty list as a placeholder for the random password.
    let passwordTwo = []

     for ( i = 0; i < 15; i++) {
        //Created a random number, used it as to get the digit in the characters list above then pushed it to the empty placeholder list
        passwordOne.push(characters[Math.floor(Math.random() * characters.length)])
        passwordTwo.push(characters[Math.floor(Math.random() * characters.length)])
    }
    //The generated password will be separated by comma, so the join("") will remove the commas
    firstPasswordEl.textContent = passwordOne.join("")
    secondPasswordEl.textContent = passwordTwo.join("")


    // If u didn't understand something here let me know!!!
}