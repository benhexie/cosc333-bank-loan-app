const fundWalletBtn = document.getElementById('fundWalletBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const applyBtn = document.getElementById('applyBtn');
const payBtn = document.getElementById('payBtn');

const fundWalletContainer = document.querySelector('.fund__wallet');
const withdrawContainer = document.querySelector('.withdraw__fund');
const applyContainer = document.querySelector('.apply__loan');
const payContainer = document.querySelector('.pay__loan');

const fundWalletCloseBtn = document.querySelector('.fund__wallet .loan__container--header-close');
const withdrawCloseBtn = document.querySelector('.withdraw__fund .loan__container--header-close');
const applyCloseBtn = document.querySelector('.apply__loan .loan__container--header-close');
const payCloseBtn = document.querySelector('.pay__loan .loan__container--header-close');


fundWalletBtn.addEventListener('click', () => {
    fundWalletContainer.classList.add('show');
    withdrawContainer.classList.remove('show');
    applyContainer.classList.remove('show');
    payContainer.classList.remove('show');
});

withdrawBtn.addEventListener('click', () => {
    fundWalletContainer.classList.remove('show');
    withdrawContainer.classList.add('show');
    applyContainer.classList.remove('show');
    payContainer.classList.remove('show');
});

applyBtn.addEventListener('click', () => {
    fundWalletContainer.classList.remove('show');
    withdrawContainer.classList.remove('show');
    applyContainer.classList.add('show');
    payContainer.classList.remove('show');
});

payBtn.addEventListener('click', () => {
    fundWalletContainer.classList.remove('show');
    withdrawContainer.classList.remove('show');
    applyContainer.classList.remove('show');
    payContainer.classList.add('show');
});

fundWalletCloseBtn.addEventListener('click', () => {
    fundWalletContainer.classList.remove('show');
});

withdrawCloseBtn.addEventListener('click', () => {
    withdrawContainer.classList.remove('show');
});

applyCloseBtn.addEventListener('click', () => {
    applyContainer.classList.remove('show');
});

payCloseBtn.addEventListener('click', () => {
    payContainer.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target == fundWalletContainer) {
        fundWalletContainer.classList.remove('show');
    } else if (e.target == withdrawContainer) {
        withdrawContainer.classList.remove('show');
    } else if (e.target == applyContainer) {
        applyContainer.classList.remove('show');
    } else if (e.target == payContainer) {
        payContainer.classList.remove('show');
    }
});

function toast(message, success = false) {
    let color = '#FF0000';
    if (success) {
        color = '#00FF00';
    }
    return window.Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: 'top',
        position: 'right',
        backgroundColor: color,
        stopOnFocus: true,
    }).showToast();
}

const fundWalletForm = document.querySelector('.fund__wallet form');
const withdrawForm = document.querySelector('.withdraw__fund form');
const applyForm = document.querySelector('.apply__loan form');
const payForm = document.querySelector('.pay__loan form');

// fund wallet
fundWalletForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.querySelector('.fund__wallet #amount').value;

    if (!amount) {
        return window.Toastify({
            text: 'Please enter amount',
            duration: 3000,
            close: true,
            gravity: 'top',
            position: 'right',
            backgroundColor: '#FF0000',
            stopOnFocus: true,
        }).showToast();
    }

    try {
        const response = await fetch('/api/fund-wallet', {
            method: 'POST',
            body: JSON.stringify({ amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
    
        if (response.status !== 200) {
            return toast(data.message);
        }
        toast(data.message, true);
        fundWalletForm.reset();   
    } catch (error) {
        // in case of network error in chrome or firefox, show toast
        if (/Failed to fetch|NetworkError/.test(error.message)) {
            return toast('Network error, please try again');
        }
        toast("An error occured, please try again");
    } 
});

// withdraw
withdrawForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.querySelector('.withdraw__fund #amount').value;

    if (!amount) {
        return window.Toastify({
            text: 'Please enter amount',
            duration: 3000,
            close: true,
            gravity: 'top',
            position: 'right',
            backgroundColor: '#FF0000',
            stopOnFocus: true,
        }).showToast();
    }

    try {
        const response = await fetch('/api/withdraw', {
            method: 'POST',
            body: JSON.stringify({ amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
    
        if (response.status !== 200) {
            return toast(data.message);
        }
        toast(data.message, true);
        withdrawForm.reset();   
    } catch (error) {
        // in case of network error in chrome or firefox, show toast
        if (/Failed to fetch|NetworkError/.test(error.message)) {
            return toast('Network error, please try again');
        }
        toast("An error occured, please try again");
    } 
});

// apply loan
applyForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.querySelector('.apply__loan #amount').value;

    if (!amount) {
        return window.Toastify({
            text: 'Please enter amount',
            duration: 3000,
            close: true,
            gravity: 'top',
            position: 'right',
            backgroundColor: '#FF0000',
            stopOnFocus: true,
        }).showToast();
    }

    try {
        const response = await fetch('/api/apply-loan', {
            method: 'POST',
            body: JSON.stringify({ amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
    
        if (response.status !== 200) {
            return toast(data.message);
        }
        toast(data.message, true);
        applyForm.reset();   
    } catch (error) {
        // in case of network error in chrome or firefox, show toast
        if (/Failed to fetch|NetworkError/.test(error.message)) {
            return toast('Network error, please try again');
        }
        toast("An error occured, please try again");
    } 
});

// pay loan
payForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const amount = document.querySelector('.pay__loan #amount').value;

    if (!amount) {
        return window.Toastify({
            text: 'Please enter amount',
            duration: 3000,
            close: true,
            gravity: 'top',
            position: 'right',
            backgroundColor: '#FF0000',
            stopOnFocus: true,
        }).showToast();
    }

    try {
        const response = await fetch('/api/pay-loan', {
            method: 'POST',
            body: JSON.stringify({ amount }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
    
        if (response.status !== 200) {
            return toast(data.message);
        }
        toast(data.message, true);
        payForm.reset();   
    } catch (error) {
        // in case of network error in chrome or firefox, show toast
        if (/Failed to fetch|NetworkError/.test(error.message)) {
            return toast('Network error, please try again');
        }
        toast("An error occured, please try again");
    } 
});