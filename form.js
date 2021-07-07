function handleSubmit(event) {
    let name = document.getElementById("firstNameInput").value;
    console.log("Imie: " + name);
    let surname = document.getElementById("surnameInput").value;
    console.log("Nazwisko: " + surname);
    let tele = document.getElementById("telephoneInput").value;
    console.log("Telefon: " + tele);
    let mail = document.getElementById("emailInput").value;
    console.log("Email: " + mail);
    let message = document.getElementById("messageInput").value;
    console.log("Wiadomosc: " + message);
    event.preventDefault();
    show();
}

function hide(event) {
    document.getElementById("successPopup").style.display = "none";
    event.preventDefault();
}

function show() {
    document.getElementById("successPopup").style.display = "block";
}