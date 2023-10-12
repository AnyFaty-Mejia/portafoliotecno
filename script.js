let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeLabibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeLabibliotecaTypewriter
    .typeString('Acerca de mi')
    .deleteChars(17)
    .pauseFor(500)
    .typeString('Fatima Mejia')
    .pauseFor(2500)
    .deleteChars(12)
    .start();

    