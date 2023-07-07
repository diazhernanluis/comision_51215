const peticion = () => {
    fetch('http://localhost:8080/hola')
    .then(response => response.text())
    .then(data => {
        document.getElementById('miId').innerHTML = data;
    })
}