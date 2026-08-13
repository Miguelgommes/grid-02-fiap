// pegar o elemento e fazer o clone e passar para contante 
const cloneSlide = document.querySelector('.logos-slide').cloneNode(true);

// colocar o elemento clonado dentro do contador logos
document.querySelector('.logos').appendChild(cloneSlide);