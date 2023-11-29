const formElm = document.querySelector('form');
const usernameElm = document.querySelector('#username');
const passwordElm = document.querySelector('#password');
const password2Elm = document.querySelector('#confirmPassword');

formElm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameElm.value;
    const password = passwordElm.value;
    const password2 = password2Elm.value;

    if (!verifyData(username, password, password2)) return;
    
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, password2 }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            alert(data.error);
        } else {
            location.assign('/login');
        }
    });
});

function verifyData(username, password, password2) {
    if (username.length < 1) {
        window.Toastify({
            text: 'Email cannot be empty',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            stopOnFocus: true,
        }).showToast();
        return false;
    }
    if (password.length < 8) {
        window.Toastify({
            text: 'Password must be at least 8 characters long',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            stopOnFocus: true,
        }).showToast();
        return false;
    }
    if (password !== password2) {
        window.Toastify({
            text: 'Passwords do not match',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            stopOnFocus: true,
        }).showToast();
        return false;
    }
    return true;
}