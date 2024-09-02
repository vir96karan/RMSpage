document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid credentials!');
    }
});

    

    function fetchVehicleData() {
        const data = [
            { parameter: 'Speed', value: `${Math.floor(Math.random() * 100)} mph` },
            { parameter: 'Fuel Level', value: `${Math.floor(Math.random() * 100)}%` },
            { parameter: 'Engine Temperature', value: `${Math.floor(Math.random() * 120)}°C` },
        ];

        const tableBody = document.getElementById('vehicleData').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; // Clear existing data

        data.forEach(row => {
            const tr = document.createElement('tr');
            const parameterCell = document.createElement('td');
            parameterCell.textContent = row.parameter;
            const valueCell = document.createElement('td');
            valueCell.textContent = row.value;
            tr.appendChild(parameterCell);
            tr.appendChild(valueCell);
            tableBody.appendChild(tr);
        });
    }


document.getElementById('logoutLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link behavior
    logout();
});

function logout() {
    // Clear any stored session data if necessary
    // For example, you might clear localStorage or sessionStorage
    localStorage.clear();

    // Redirect the user back to the login page
    window.location.href = 'login.html';
}
document.addEventListener('DOMContentLoaded', function () {
    const textBlocks = document.querySelectorAll('.text-block, .quote-block');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    textBlocks.forEach(block => {
        observer.observe(block);
    });
});

