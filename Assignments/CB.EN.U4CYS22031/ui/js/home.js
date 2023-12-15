let king = document.getElementById('king')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let board = document.getElementById('board')



window.addEventListener('scroll',function(){

    let value = window.scrollY;
    king.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 +'px';
})