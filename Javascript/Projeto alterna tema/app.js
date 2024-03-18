'use strict'
/**
 * O modo estrito ajuda a capturar erros comuns de codificação e impede o uso de recursos problemáticos que podem levar a bugs. Por exemplo, ele não permite a atribuição de valores a variáveis não declaradas, o que ajuda a evitar a criação acidental de variáveis globais.
 */

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')
    
    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent= "Escuro";
    }
    else{
        this.textContent="Claro";
    }
});
