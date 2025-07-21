document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name, email, message })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.message);
        this.reset();
    })
    .catch(err => {
        console.error(err);
        alert('Սխալ տեղի ունեցավ');
    });
});
