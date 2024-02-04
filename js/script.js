function openPopup() {
    document.getElementById('loginPopup').innerHTML.style.display = 'block';
}

function closePopup() {
    document.getElementById('loginPopup').innerHTML.style.display = 'none';
}

function submitForm() {
    closePopup();
}

document.getElementById('loginButton').addEventListener('click', openPopup);