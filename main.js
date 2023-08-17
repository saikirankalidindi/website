var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Data Scientist')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Python Developer')
    .pauseFor(2500)
    .start();
  