function contact(event){
    event.preventDefault();

    const email = encodeURIComponent('merciacristina7@gmail.com');
    const form = {
        subject:encodeURIComponent(document.getElementById('subject').value),
        email:encodeURIComponent(document.getElementById('email').value),
        message:encodeURIComponent(document.getElementById('message').value)
    }

    window.location.replace(`mailto:${email}?cc=${form.email}&subject=${form.subject}&body=${form.message}`);

}