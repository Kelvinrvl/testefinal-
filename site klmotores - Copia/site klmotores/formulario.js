function validatePassword(password) {
    const minLength = 8;
    const lowerCase = /[a-z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < minLength) {
       //alert("A senha deve ter pelo menos 8 caracteres.");
       return false
    }else{
        return true
    }

    if (lowerCase.test(password)) {
        //alert("A senha deve conter pelo menos uma letra minúscula.");
        return false
    }else{
        return true
    }

    if (specialChar.test(password)) {
        //alert("A senha deve conter pelo menos um caractere especial.");
        return false
    }else{
        return true
    }
    return true;
}

function checkPassword(password, confirmPassword) {
    // const password = document.getElementById("password").value;
    // const confirmPassword = document.getElementById("confirmPassword").value;
    // const passwordMessage = validatePassword(password);
    // document.getElementById("passwordMessage").innerText = passwordMessage;

    if (password !== confirmPassword) {
        // document.getElementById("confirmMessage").innerText = "As senhas não coincidem.";
        return false;
    } else {
        // document.getElementById("confirmMessage").innerText = "";
    }

    return true;
}

function checkAge(idade) {
    const birthDate = new Date(idade);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age-1;
    }

    if (age < 18) {
        //document.getElementById("ageMessage").innerText = "Você deve ter pelo menos 18 anos.";
       //return false;
    } else {
       // document.getElementById("ageMessage").innerText = "";
    }
    return true;
}

// function updateCities() {
//     const state = document.getElementById("state").value;
//     const cities = {
//         "SP": ["São Paulo", "Campinas", "Santos"],
//         "RJ": ["Rio de Janeiro", "Niterói", "Petrópolis"],
//         "MG": ["Belo Horizonte", "Uberlândia", "Ouro Preto"],
//         "ES": ["Vitória", "Vila Velha", "Serra"]
//     };
//     const citySelect = document.getElementById("city");
//     citySelect.innerHTML = "<option value=''>Selecione uma cidade</option>";
//     if (state) {
//         cities[state].forEach(city => {
//             const option = document.createElement("option");
//             option.value = city;
//             option.text = city;
//             citySelect.add(option);
//         });
//         citySelect.disabled = false;
//     } else {
//         citySelect.disabled = true;
//     }
// }
function validateForm(password, confirmPassword, idade, ) {
    const passwordValid = checkPassword(password, confirmPassword);
    const ageValid = checkAge(idade);
    // const stateSelected = document.getElementById("state").value !== "";
    // const citySelected = document.getElementById("city").value !== "";

    if (passwordValid && ageValid ) {
        // window.alert("Formulário enviado com sucesso!")
        return true;
    } else {
        //document.getElementById("formMessage").innerText = "Por favor, preencha todos os campos corretamente.";
        return false;
    }
}

module.exports = { validatePassword, checkPassword, checkAge, validateForm }
