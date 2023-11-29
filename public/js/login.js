const formElm = document.querySelector('form');
const usernameElm = document.querySelector('#username');
const passwordElm = document.querySelector('#password');

formElm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = usernameElm.value;
    const password = passwordElm.value;

    if (!verifyData(username, password)) return;
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then((res) => res.json())
    .then((data) => {
        if (data.error) {
            window.Toastify({
                text: data.error,
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: 'linear-gradient(to right, #ff416c, #ff4b2b)',
                stopOnFocus: true,
            }).showToast();
        } else {
            location.assign('/');
        }
    }).catch(err => {
        // show toast when internet is down on chrome or firefox
        if (/failed to fetch|NetworkError/.test(err.message)) {
            window.Toastify({
                text: 'Check your internet connection and try again',
                duration: 3000,
                gravity: 'bottom',
                position: 'right',
                backgroundColor: 'linear-gradient(to right, #ff416c, #ff4b2b)',
                stopOnFocus: true,
            }).showToast();
            return;
        }
        window.Toastify({
            text: 'Something went wrong',
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: 'linear-gradient(to right, #ff416c, #ff4b2b)',
            stopOnFocus: true,
        }).showToast();
    })
});

function verifyData(username, password) {
    if (username.length < 1) {
        window.Toastify({
            text: 'Username cannot be empty',
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
    return true;
}