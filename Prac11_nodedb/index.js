let signUpBtn = document.querySelector("button.sign-up");
if (signUpBtn !== null) {
    signUpBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let formData = document.getElementById("sign-up-form");
        console.log(formData.elements.name.value);
        console.log(formData.elements.email.value);
        console.log(formData.elements.password.value);
        testFun();
    });
}

let signInBtn = document.querySelector("button.sign-in");
if (signInBtn !== null) {
    signInBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let formData = document.getElementById("sign-in-form");
        console.log(formData.elements.email.value);
        console.log(formData.elements.password.value);
    });
}