
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let encryptButton = document.getElementById("myButton");
let encryptText;
let secretMessage;
let encryptedMessage = [];
let encryptedText = document.getElementById("encrypted-text");
let myNumber;
let encryptNumber;
let selection = document.querySelector('select');
let clear = document.getElementById('clear');
let upload = document.getElementById('upload');

//gets the the message to be encrypted from the textarea   
function getText() {
    encryptText = document.getElementById("encrypt-text").value;
}

//allows the user to input a local text file to be encrypted
upload.addEventListener("change", function () {
    if (this.files && this.files[0]) {
        var myFile = this.files[0];
        var reader = new FileReader();

        reader.addEventListener('load', function (e) {
            encryptText = document.getElementById("encrypt-text").value;
            let showFileText = document.getElementById("encrypt-text");
            encryptText = e.target.result;
            showFileText.textContent = e.target.result;
        });

        reader.readAsBinaryString(myFile);
    }
});

//gets the value from the the dropdown to be used as the encyrption number 
selection.addEventListener('change', () => {
    myNumber = selection.options[selection.selectedIndex].text;
    encryptNumber = parseInt(myNumber);
    console.log(encryptNumber);
});

//clears the textboxes and the decrypted message array when pressed
clear.addEventListener('click', () => {
    encryptedText.innerHTML = "";
    let showFileText = document.getElementById("encrypt-text");
    showFileText.value = "";
    showFileText.innerHTML = "";
    encryptedMessage = [];
});

function caesarDecrypt() {
    var areEqual = encryptText.toLowerCase();
    secretMessage = areEqual.split('');

    for (let i = 0; i <= secretMessage.length; i++) {
        let letterPosition = secretMessage[i];
        let alphabetPosition = alphabet.indexOf(letterPosition);

        //if the position of the alphabet is less than 0, do nothing
        if (alphabetPosition < 0) {
            let letterPositionPlusThree = (alphabetPosition + 0);
            let newEncryptionMessage = alphabet[letterPositionPlusThree];
            encryptedMessage.push(newEncryptionMessage);
            let output = encryptedMessage.join(" ");
            encryptedText.innerHTML = output;
        }

        //if it's not less than 0, perform the encrytion operation 
        else {
            let letterPositionPlusThree = ((alphabetPosition - encryptNumber) + 26) % 26;
            console.log(encryptNumber);
            let newEncryptionMessage = alphabet[letterPositionPlusThree];
            encryptedMessage.push(newEncryptionMessage);
            let output = encryptedMessage.join("");
        }
    }
}

encryptButton.addEventListener('click', caesarDecrypt);
