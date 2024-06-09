let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let number = document.getElementById("number");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon")



sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;

})

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword()
})

let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nums = "0123456789"
let allSymbols = "~!@#$%^&*+:?"

// function to generate Password 
function generatePassword() {
    let genPassword = "";

    let allCharacters = "";
    allCharacters += lowercase.checked ? lowercase : "";
    allCharacters += uppercase.checked ? uppercase : "";
    allCharacters += number.checked ? nums : "";
    allCharacters += symbols.checked ? allSymbols : "";

    if (allCharacters == "" || allCharacters.length == 0) {
        return genPassword
    }
    let i = 1;
    while (i <= inputSlider.value) {
        genPassword += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
        i++;
    }

    return genPassword
}

copyIcon.addEventListener("click", () => {
    if (passBox.value.length >= 1) {

        navigator.clipboard.writeText(passBox.value)
        copyIcon.style.top = "20px"
        setTimeout(() => {
            copyIcon.style.top = "18px"
        }, 300)
    }
})
