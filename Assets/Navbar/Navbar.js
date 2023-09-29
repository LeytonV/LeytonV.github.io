const navbar = document.createElement("nav");
var client = new XMLHttpRequest();
client.open('GET', 'Assets/Navbar/Navbar.html');
client.onreadystatechange = function() {
    navbar.innerHTML = client.responseText;
    document.body.prepend(navbar);
}
client.send();