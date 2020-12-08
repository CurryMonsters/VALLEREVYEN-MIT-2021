const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: false
});

sr.reveal(`.hero-content, .imgbox, .hero-S, .tickets__list--card,.v-card,.sponser-box, .box`, {
    interval: 150
})

const selectElement = (element) => document.querySelector(element);
selectElement('.toggler').addEventListener('click', () =>{
    selectElement('html').classList.toggle('full-screen');
});

selectElement('.close-on-click').addEventListener('click', () =>{
    document.getElementById("tickbox").checked = false;
    if(selectElement('html').classList.contains('full-screen')){
        document.getElementById("tickbox").checked = false;
        selectElement('html').classList.remove('full-screen');
    }
});
selectElement('.close-on-click1').addEventListener('click', () =>{
    document.getElementById("tickbox").checked = false;
    if(selectElement('html').classList.contains('full-screen')){
        document.getElementById("tickbox").checked = false;
        selectElement('html').classList.remove('full-screen');
    }
});

selectElement('.close-on-clicked').addEventListener('click', () =>{
    if(selectElement('html').classList.contains('full-screen')){
        document.getElementById("tickbox").checked = false;
        selectElement('html').classList.remove('full-screen');
    }
});