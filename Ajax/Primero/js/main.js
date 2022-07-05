function loadDoc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("hola").innerHTML = this.responseText;
    }
    xhttp.open("GET", "prueba.txt");
  xhttp.send();
}