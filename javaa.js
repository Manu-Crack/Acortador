document.getElementById("shortenForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const longUrl = document.getElementById("longUrl").value;

    fetch('http://tu-load-balancer-url.com/acortar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl: longUrl })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("shortUrl").textContent = data.shortUrl;
    })
    .catch(error => {
        console.error('Error al acortar la URL:', error);
    });
});
