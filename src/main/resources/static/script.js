// script.js
function fetchData() {
    fetch('/api/hello')
        .then(res => res.text())
        .then(data => document.getElementById('response').innerText = data);
}
