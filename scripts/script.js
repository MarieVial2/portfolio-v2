var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};


// ANIMATION D'APPARITION DIFFEREE

// const threshold = .1
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold
// }

// const handleIntersect = function (entries, observer) {
//     entries.forEach(function (entry) {
//         if (entry.intersectionRatio > threshold) {
//             entry.target.classList.remove('reveal')
//             observer.unobserve(entry.target)
//         }
//     })
// }

// document.documentElement.classList.add('reveal-loaded')

// window.addEventListener("DOMContentLoaded", function () {
//     const observer = new IntersectionObserver(handleIntersect, options)
//     const targets = document.querySelectorAll('.reveal')
//     targets.forEach(function (target) {
//         observer.observe(target)
//     })
// })

// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.
(function () {
    // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
    // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
    "use strict"

    // Définir la fonction detectAndAnimate pour basculer la classe des éléments
    const detectAndAnimate = () => {
        // Sélectionner tous les éléments avec la classe 'animate-on-scroll'
        const elements = document.querySelectorAll('.animate-on-scroll');
        // Boucle sur tous les éléments sélectionnés
        elements.forEach(element => {
            // Vérifier si l'élément est visible dans la fenêtre du navigateur
            const isVisible = isElementInViewport(element);
            // Ajouter ou supprimer la classe 'is-visible' en fonction de la visibilité de l'élément
            element.classList.toggle('is-visible', isVisible);
        });
    };
    // Définir la fonction isElementInViewport pour vérifier la visibilité de l'élément dans la fenêtre du navigateur
    const isElementInViewport = el => {
        // Récupérer les dimensions de l'élément
        const rect = el.getBoundingClientRect();
        // Récupérer la hauteur de la fenêtre du navigateur
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        // Récupérer la largeur de la fenêtre du navigateur
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        // Retourner vrai si l'élément est entièrement visible dans la fenêtre du navigateur, sinon retourner faux
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= viewportHeight &&
            rect.right <= viewportWidth
        );
    };
    // Écouter l'événement de défilement de la fenêtre du navigateur et appeler la fonction detectAndAnimate
    window.addEventListener('scroll', detectAndAnimate);
    // Appeler la fonction detectAndAnimate une fois au démarrage pour mettre à jour l'état des éléments
    detectAndAnimate();

    const detectAndAnimate2 = () => {
        // Sélectionner tous les éléments avec la classe 'animate-on-scroll'
        const elements2 = document.querySelectorAll('.animate-on-scroll2');
        // Boucle sur tous les éléments sélectionnés
        elements2.forEach(element => {
            // Vérifier si l'élément est visible dans la fenêtre du navigateur
            const isVisible2 = isElementInViewport(element);
            // Ajouter ou supprimer la classe 'is-visible' en fonction de la visibilité de l'élément
            element.classList.toggle('is-visible', isVisible2);
        });
    };
    // Définir la fonction isElementInViewport pour vérifier la visibilité de l'élément dans la fenêtre du navigateur

    // Écouter l'événement de défilement de la fenêtre du navigateur et appeler la fonction detectAndAnimate
    window.addEventListener('scroll', detectAndAnimate2);
    // Appeler la fonction detectAndAnimate une fois au démarrage pour mettre à jour l'état des éléments
    detectAndAnimate2();

    const detectAndAnimate3 = () => {
        // Sélectionner tous les éléments avec la classe 'animate-on-scroll'
        const elements3 = document.querySelectorAll('.animate-on-scroll3');
        // Boucle sur tous les éléments sélectionnés
        elements3.forEach(element => {
            // Vérifier si l'élément est visible dans la fenêtre du navigateur
            const isVisible3 = isElementInViewport(element);
            // Ajouter ou supprimer la classe 'is-visible' en fonction de la visibilité de l'élément
            element.classList.toggle('is-visible', isVisible3);
        });
    };
    // Définir la fonction isElementInViewport pour vérifier la visibilité de l'élément dans la fenêtre du navigateur

    // Écouter l'événement de défilement de la fenêtre du navigateur et appeler la fonction detectAndAnimate
    window.addEventListener('scroll', detectAndAnimate3);
    // Appeler la fonction detectAndAnimate une fois au démarrage pour mettre à jour l'état des éléments
    detectAndAnimate3();
})()


