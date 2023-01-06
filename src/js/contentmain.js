function bulmafy() {
    var bulma = document.createElement('link');
    bulma.setAttribute('rel', 'stylesheet');
    bulma.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css');
    document.head.appendChild(bulma);
}
document.querySelector("body > div.sg-main-header > div.sg-banner.sg-banner-logo-color > img").style.transitionDuration = '3.0s';
document.querySelector("body > div.sg-main-header > div.sg-banner.sg-banner-logo-color > img").style.transform = 'rotate(3000deg)';