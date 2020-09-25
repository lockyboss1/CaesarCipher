let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let encryptButton = document.getElementById("myButton");
let encryptText = document.getElementById("encrypt-text").value;
let secretMessage;
let encryptedMessage = [];
let encryptNumber = document.getElementById("encrypt-number").value;
let encryptedText = document.getElementById("encrypted-text");

encryptButton.addEventListener("click", function () {
    var areEqual = encryptText.toLowerCase();
    secretMessage = areEqual.split('');
    console.log(secretMessage);

    for (let i = 0; i <= secretMessage.length; i++) {
        let letterPosition = secretMessage[i];
        let alphabetPosition = alphabet.indexOf(letterPosition);

        if (alphabetPosition < 0) {
            let letterPositionPlusThree = (alphabetPosition + 0);
            let newEncryptionMessage = alphabet[letterPositionPlusThree];
            encryptedMessage.push(newEncryptionMessage);
            let output = encryptedMessage.join("  ");
            console.log(output);
            encryptedText.innerHTML = output;
        }

        else {
            let letterPositionPlusThree = (alphabetPosition + encryptNumber) % 26;
            console.log(encryptNumber);
            let newEncryptionMessage = alphabet[letterPositionPlusThree];
            encryptedMessage.push(newEncryptionMessage);
            let output = encryptedMessage.join("");
        } 
    }
})
