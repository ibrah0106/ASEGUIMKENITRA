document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Merci pour votre message, ' + name + '! Nous vous répondrons bientôt.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});