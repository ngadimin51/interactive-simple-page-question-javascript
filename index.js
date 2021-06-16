'use strict'

const namaku = document.getElementById("nama");
namaku.addEventListener("keyup", () => {
  document.getElementById("hasil").innerText = nama.value;
});

let ans = []; //var ans = new Array;
var done = []; //var done = new Array;
var score = 0;
const length = arraySoal.length

const soal = document.getElementById('section-soal')
let sectSoal = ''
for (let i = 1; i <= length; i++) {
    sectSoal += `<b>${i}. ${arraySoal[i - 1][0]}</b><br />
    <form id="form-${i}" class="form-soal">`
    sectSoal += `<div>
        <input type="radio" id="0" data-id="${i}" name="jawaban" value="${arraySoal[i - 1][2]}">
        <label for="a">${arraySoal[i - 1][2]}</label>
    </div>
    <div>
        <input type="radio" id="1" data-id="${i}" name="jawaban" value="${arraySoal[i - 1][3]}">
        <label for="b">${arraySoal[i - 1][3]}</label>
    </div>
    <div>
        <input type="radio" id="2" data-id="${i}" name="jawaban" value="${arraySoal[i - 1][4]}">
        <label for="c">${arraySoal[i - 1][4]}</label>
    </div>`
    sectSoal += `</form>`
}
soal.innerHTML = sectSoal

const jawaban = document.querySelectorAll('[name="jawaban"]')
for (let i = 0; i < jawaban.length; i++) {
    jawaban[i].addEventListener('click', (e) => {
        const id = jawaban[i].getAttribute('data-id')
        const value = jawaban[i].getAttribute('value')
        const process = Engine(id, value)
        if (process == false) {
            e.preventDefault()
        }
        document.querySelector('#nilai').innerHTML = score
    })
}

function Engine(question, answer) {
    let  NAMAKU = document.querySelector('#hasil').innerHTML
    if (NAMAKU == '') {
        swal({
            title: "Silahkan isi nama",
            icon: "error",
            button: "OK!",
        }).then ( e => { namaku.focus() } );
        const form = document.getElementById('form-'+question)
        form.reset()
        return false
    }
    NAMAKU = NAMAKU.toUpperCase()+' '
    if (answer != arraySoal[question - 1][1]) {
        if (!done[question]) {
            done[question] = -1;
            swal({
                title: "Salah!",
                text: (NAMAKU +" Nilaimu: " + score  ),
                icon: "error",
                button: "OK!",
            });
            return true
        } else {
            swal({
                title: "Anda sudah menjawab soal ini!",
                text: ( NAMAKU + " Nilaimu: " + score ),
                icon: "error",
                button: "OK!",
            });
            return false
        }
    } else {
        if (!done[question]) {
            done[question] = -1;
            score++;
            swal({
                title: "Benar sekali!",
                text: ( NAMAKU + " Nilaimu: " + score ),
                icon: "success",
                button: "OK!",
            });
            return true
        } else {
            swal({
                title: "Anda sudah menjawab soal ini!",
                text: ( NAMAKU + " Nilaimu: " + score ),
                icon: "error",
                button: "OK!",
            });
            return false
        }
    }
}

function NextLevel () {
    if (score > 10) {
        alert("Anda mendapatkan nilai SEMPURNA !");
    }
    if (score >= 7 && score <= 11) {
    swal("Selamat!")
        self.location="https://www.belajarbahasabali.com/"
    } else {
        swal({
            title: "Nilaimu masih kurang!",
            text: ("Nilaimu: " + score ),
            icon: "error",
            button: "OK!",
        });
    }
}

var isCtrl = false;
document.onkeyup=function(e) {
    if(e.which == 17)
    isCtrl = false;
}
document.onkeydown=function(e) {
    if(e.which == 17)
    isCtrl=true;
    if((e.which == 85) || (e.which == 67) && isCtrl == true) {
        return false;
    }
}

document.oncontextmenu = () => {
    return false
}

/**
 * fungsi ini sudah tidak support di html5
 * Check this out https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appName
 * 
 * var isNS = (navigator.appName == "Netscape") ? 1 : 0; //DEPRECATED
 * if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP); //DEPRECATED
 * 
 * function mischandler(){
 *      return false;
 * }
 * 
 * function mousehandler(e) {
 * var myevent = (isNS) ? e : event;
 * var eventbutton = (isNS) ? myevent.which : myevent.button;
 *      if((eventbutton==2)||(eventbutton==3)) return false;
 * }
 * */

/**
 * document.onmousedown = mousehandler;
 * document.onmouseup = mousehandler;
 */