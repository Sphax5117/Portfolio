const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const helloEl = document.querySelector('.hello');
const youngEl = document.querySelector('.young');
const aboutEl = document.querySelector('.about');
const introEl = document.querySelector('.intro');
const titleEl = document.querySelector('.title');
const csEl = document.querySelector('.censthusiast')
const csEl2 = document.querySelector('.censthusiast2')
const csP = document.querySelector('.csP')

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        helloEl.textContent = data[attr].hello;
        youngEl.innerHTML = data[attr].young;
        aboutEl.textContent = data[attr].about;
        introEl.textContent = data[attr].intro;
        titleEl.textContent = data[attr].title;
        csEl.textContent = data[attr].censthusiast;
        csEl2.textContent = data[attr].censthusiast2;
        csP.innerHTML = data[attr].csP;

    });
});

var data = {
  "english": {
    "about": "About",
    "hello": "Hello, I'm",
    "young": '<h1 class="young">Tom Hausmann,<br>Young <span style="color: #47814A">Website Builder</span></h1>',
    "intro": "I’m a 16 years old web and mobile developper ! I’m young, ambitious and motivated to build your website or your app ! I’m currently learning coding in Poitiers, France.",
    "title": "Who am I ?",
    "censthusiast": "A computer enthusiast",
    "censthusiast2": "A computer enthusiast",
    "csP":'Since i’m 7, i’ve always been interested into computer science 💻 <br> <br> I created a lot of projects, and each of them brought me experience ! (you can see them in my <a href="#portfolio">portfolio</a> ) <br> <br> Here are the technologies that i work with :'
  },
  "french": {
    "about": "À propos",
    "hello": "Bonjour, je suis",
    "young": '<h1 class="young">Tom Hausmann,<br>Jeune <span style="color: #47814A">créateur de sites</span></h1>',
    "intro": "Je suis un développeur web de 16 ans ! Je suis jeune, ambitieux et motivé pour construire votre site web ou votre application ! J'apprends pour le moment la programmation à Poitiers.",
    "title": "Qui suis-je ?",
    "censthusiast": "Un passioné d'informatique",
    "censthusiast2": "Un passioné d'informatique",
    "csP":'Depuis que j\'ai 7 ans, je me suis toujours interessé à l\'informatique💻 <br> <br> J\'ai developpé quelques projets, et ils m\'ont tous apporté de l\'expérience ! (Vous pouvez les voirs dans mon <a href="#portfolio">portfolio</a> ) <br> <br> Voici les technologies avec lesquelles je travaille :'
  }
};