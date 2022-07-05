$(document).ready(function() {
    $("#boton1").click(function() {
        alert("el texto es: " + $('#texto').text("Hola<h2>hola</h2>"));
    });
    /* Diferencia de la funcion html */
    $("#boton2").click(function() {
        alert("el html es: " + $('#texto').html("Hola<h2>hola</h2>"));
    });
    /* Añadir elmento escrito en el input desde html a la lista */
    $("#boton3").click(function() {
        alert("el value es: " + $('#valor1').val());
    });
    /* Añadir elmento escrito en el input a la lista */
    $("#botonLista").click(function() {
        $('#menu').append("<li>" + $('#getInput').val() + "</li>");

    });
    /* Texto antes de la imagen */
    $("#botonImg").click(function() {
        $('img').before("TExto antes de la image");
    });
    /* Texto despues de la imagen */
    $("#botonImg2").click(function() {
        $('img').after("TExto antes de la image");
    });
    /* Añadir clases */
    $("#botonImg2").click(function() {
        $('img').after("TExto antes de la image");
    });
    $("#add").click(function() {
        $("p,h1,h2").addClass("resaltar");
        $("div").addClass("color");
    });
});