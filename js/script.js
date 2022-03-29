document.body.style.backgroundColor= `gray`


let Ndo = document.getElementById('do')
let Nre = document.getElementById('re')
let Nmi = document.getElementById('mi')
let Nfa = document.getElementById('fa')
let Nsol = document.getElementById('sol')
let Nla = document.getElementById('la')
let Nsi = document.getElementById('si')
let Ndo2 = document.getElementById('do2')

let c = new Audio("assets/do.mp3");
let d = new Audio("assets/re.mp3");
let ee = new Audio("assets/mi.mp3");
let f = new Audio("assets/fa.mp3");
let g = new Audio("assets/sol.mp3");
let a = new Audio("assets/la.mp3");
let b = new Audio("assets/si.mp3");
let c2 = new Audio("assets/do2.mp3");


Ndo.addEventListener('mousedown',function(){
    Ndo.classList.add('warna');
    c.play();
})
Ndo.addEventListener('mouseup',function(){
    Ndo.classList.remove('warna');
    c.pause();
    c.currentTime = 0;
})

// ------------------------------------------------------ keydown
window.addEventListener('keydown',function(e){

    switch(e.key){
        case 'q': Ndo.classList.add('warna');
        case 'q': c.play();
        break;
        case 'w': Nre.classList.add('warna');
        case 'w': d.play();
        break;
        case 'e': Nmi.classList.add('warna');
        case 'e': ee.play();
        break;
        case 'r': Nfa.classList.add('warna');
        case 'r': f.play();
        break;
        case 't': Nsol.classList.add('warna');
        case 't': g.play();
        break;
        case 'y': Nla.classList.add('warna');
        case 'y': a.play();
        break;
        case 'u': Nsi.classList.add('warna');
        case 'u': b.play();
        break;
        case 'i': Ndo2.classList.add('warna');
        case 'i': c2.play();
    }
})


// ------------------------------------------------------ keyup
window.addEventListener('keyup',function(e){

    switch(e.key){
        case 'q': Ndo.classList.remove('warna');
//         case 'q': c.pause();
        case 'q': c.currentTime = 0;
        break;
        case 'w': Nre.classList.remove('warna');
//         case 'w': d.pause();
//         case 'w': d.currentTime = 0;
        break;
        case 'e': Nmi.classList.remove('warna');
        case 'e': ee.pause();
        case 'e': ee.currentTime = 0;
        break;
        case 'r': Nfa.classList.remove('warna');
        case 'r': f.pause();
        case 'r': f.currentTime = 0;
        break;
        case 't': Nsol.classList.remove('warna');
        case 't': g.pause();
        case 't': g.currentTime = 0;
        break;
        case 'y': Nla.classList.remove('warna');
        case 'y': a.pause();
        case 'y': a.currentTime = 0;
        break;
        case 'u': Nsi.classList.remove('warna');
        case 'u': b.pause();
        case 'u': b.currentTime = 0;
        break;
        case 'i': Ndo2.classList.remove('warna');
        case 'i': c2.pause();
        case 'i': c2.currentTime = 0;
    }
})



