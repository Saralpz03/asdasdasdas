function banco2(g, c,m, t){
    if(m == 'x'){
        const newSentence:string="Hola "+g+" tu cliente "+c+" tiene que tener el DNI 00000000 de l transferencia "+t;
    }else if(m == 'y'){
        const newSentence:string="Hola "+g+" tu cliente "+c+" tiene que tener el DNI 22222222 de l transferencia "+t;
    }else{
        const newSentence:string="Hola "+g+" tu cliente "+c+" tiene que tener el DNI 88888888 de l transferencia "+t;  
    }
}