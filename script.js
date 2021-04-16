let popcon = document.getElementById('pop-container');

let open = document.getElementById('open');

let close = document.getElementById('close');

open.addEventListener('click' ,opentype);

function opentype(){
    popcon.style.display= 'block';
}

close.addEventListener('click' ,closetype);

function closetype(){
    popcon.style.display= 'none';
}

