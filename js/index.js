'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const acepto = () => {
    alert('🥰 SABIA QUE DIRIAS QUE SI 🥰');
    alert('MAÑANA NOS CASAMOS GG');
    location.href = 'https://www.youtube.com/watch?v=lOD4tHz4A_8';
  };

  const evitarNO = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };
  heroButtonSi.addEventListener('click', acepto);
  heroButtonNo.addEventListener('mouseover', evitarNO);
};
document.addEventListener('DOMContentLoaded', documentReady);