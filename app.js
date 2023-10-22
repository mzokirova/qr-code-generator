'use strict';
const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const qrImg = document.getElementById('qr-image');
const qrBox = document.getElementById('qr-box');
const input = document.getElementById('qr-input');

 function generateQr() {
     qrImg.src = url + input.value;
     qrBox.classList.add('show-img')
}