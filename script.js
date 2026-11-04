let password = document.getElementById("password");

password.addEventListener("input", function () {

    let value = password.value;
    let score = 0;

    // Requirements
    let hasLength = value.length >= 8;
    let hasUppercase = /[A-Z]/.test(value);
    let hasLowercase = /[a-z]/.test(value);
    let hasNumber = /[0-9]/.test(value);
    let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    // Update requirements
    document.getElementById("length").innerHTML =
        (hasLength ? "✅" : "❌") + " At least 8 characters";

    document.getElementById("uppercase").innerHTML =
        (hasUppercase ? "✅" : "❌") + " Contains uppercase letter";

    document.getElementById("lowercase").innerHTML =
        (hasLowercase ? "✅" : "❌") + " Contains lowercase letter";

    document.getElementById("number").innerHTML =
        (hasNumber ? "✅" : "❌") + " Contains a number";

    document.getElementById("special").innerHTML =
        (hasSpecial ? "✅" : "❌") + " Contains special character";

    // Calculate score
    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    let strength = document.getElementById("strength");
    let strengthText = document.getElementById("strengthText");

    if (score === 0) {
        strength.style.width = "0%";
        strengthText.innerHTML = "Password Strength:";
    }
    else if (score <= 2) {
        strength.style.width = "40%";
        strengthText.innerHTML = "Password Strength: Weak";
        strength.style.background = "red";
    }
    else if (score <= 4) {
        strength.style.width = "70%";
        strengthText.innerHTML = "Password Strength: Medium";
        strength.style.background = "orange";
    }
    else {
        strength.style.width = "100%";
        strengthText.innerHTML = "Password Strength: Strong";
        strength.style.background = "green";
    }

});