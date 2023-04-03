class servImgs {
    constructor(url, num) {
        this.url = url;
        this.num = num;
    }

    drawnIMG() {
        return `<div class="cont=serv-imgs"><img class="serv-img ${this.num === 1 ? 'on' : ''}" src="${this.url}"></div>`
    }
}

let allIMG = [ 
    new servImgs("https://placehold.co/600x400?text=Serviço+1&font=roboto", 1),
    new servImgs("https://placehold.co/600x400?text=Serviço+2&font=roboto", 2),
    new servImgs("https://placehold.co/600x400?text=Serviço+3&font=roboto", 3)
];

document.querySelector('.serv-imgs').innerHTML = allIMG.reduce((acc, img) => { return acc += img.drawnIMG() }, '');

const slider = document.querySelectorAll('.serv-img');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

let curImg = 0;

const hideImg = () => {
  slider.forEach((item) => { return item.classList.remove('on') });
}

const showImg = () => {
  slider[curImg].classList.add('on');
}

const nextImg = () => {
    hideImg();
    if(curImg === allIMG.length - 1) {
        curImg = 0;
    } else {
        curImg++
    }
    showImg();
}

const prevImg = () => {
    hideImg();
    if(curImg === 0) {
        curImg = allIMG.length - 1;
    } else {
        curImg--;
    }
    showImg();
}

btnNext.addEventListener('click', nextImg);
btnPrev.addEventListener('click', prevImg);

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

class objetivos {
    constructor(titulo, corpo) {
        this.titulo = titulo;
        this.corpo = corpo;
    }

    drawnOBJ() {
        return `<div class="objetivo"><h3>${this.titulo}</h3><p>${this.corpo}</p></div>`
    }
}

let allOBJ = [ new objetivos('Teste','Testando')];

document.querySelector('.objetivos').innerHTML = allOBJ.reduce((acc, obj) => { return acc += obj.drawnOBJ() }, '');
