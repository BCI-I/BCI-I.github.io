
// common.js
fetch('head.html')
    .then(response => response.text())
    .then(html => {
        document.head.innerHTML += html;
    });
