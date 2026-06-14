const form = document.querySelector(".content-hero-form");
const input = document.querySelector(".content-hero");
const errorMessage = document.querySelector(".content-hero-error_message");

function isVadidEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", function (event){
    event.preventDefault();

    const email = input.value.trim();

    if (!isVadidEmail(email)) {
        input.classList.add("error");
        errorMessage.classList.remove("hidden");
        return;
    }

    input.classList.remove("error");
    errorMessage.classList.add("hidden");
    input.value = "";
});