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

var trad_func = document.querySelector('.tradu_func')
var pal_func = document.querySelector('.titulo_func')

pal_func.addEventListener('click', function(){

    pal_func.style.display = 'none'
    trad_func.style.display = 'block'
})
trad_func.addEventListener('click', function(){

    trad_func.style.display ='none'
    pal_func.style.display = 'block'
})

var trad_planos = document.querySelector('.tradu_planos')
var pal_planos = document.querySelector('.titulo_planos')

pal_planos.addEventListener('click', function(){

    pal_planos.style.display = 'none'
    trad_planos.style.display = 'block'
})
trad_planos.addEventListener('click', function(){

    trad_planos.style.display = 'none'
    pal_planos.style.display = 'block'
})

var trad_aval = document.querySelector('.tradu_aval')
var pal_aval = document.querySelector('.titulo_aval')

pal_aval.addEventListener('click', function(){

    pal_aval.style.display = 'none'
    trad_aval.style.display = 'block'
})

trad_aval.addEventListener('click', function(){

    trad_aval.style.display = 'none'
    pal_aval.style.display = 'block'
})

var aprovado = document.querySelector('.aprovado')

aprovado.addEventListener('click', function(){

    alert("Isso foi aprovado pelo atual Faraó")
})