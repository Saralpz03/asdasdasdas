function gestores(){
    var gestores =["Wordpress","Joomla","Drupal"];
    let counter = 0;
    const i = setInterval(function(){
    document.write(gestores[counter]+"<br>");
        counter++;        
        if(counter === gestores.length) {
        clearInterval(i);
        }
    }, 2000);
}