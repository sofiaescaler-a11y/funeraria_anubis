// Escreva o seu JavaScript aqui
var trad_inicio = document.querySelector('.tradu_inicio')
var pal_inicio = document.querySelector('.titulo_inicio')

pal_inicio.addEventListener('click', function(){

    pal_inicio.style.display = 'none';
    trad_inicio.style.display = 'block'
})

trad_inicio.addEventListener('click', function(){

    trad_inicio.style.display = 'none'
    pal_inicio.style.display = 'block'
})