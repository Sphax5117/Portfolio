const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('.languageButt');
const helloEl = document.querySelector('.hello');
const youngEl = document.querySelector('.young');
const aboutEl = document.querySelector('.about');
const xpEl = document.querySelector('.xp');
const introEl = document.querySelector('.intro');
const titleEl = document.querySelector('.title');
const csEl = document.querySelector('.censthusiast');
const csEl2 = document.querySelector('.censthusiast2');
const csP = document.querySelector('.csP');
const designer = document.querySelector('.designer');
const designer2 = document.querySelector('.designer2');
const desDes = document.querySelector('.desDes');
const entrepreneur = document.querySelector('.entrepreneur');
const entrepreneur2 = document.querySelector('.entrepreneur2');
const entreDes = document.querySelector('.entreDes');
const xp2El = document.querySelector('.xp2');
const xpDes = document.querySelector('.exDes');
const sutm = document.querySelector('.SUTM');
const zmg = document.querySelector('.Zmg');
const pdj = document.querySelector('.PODJ');
const ytb = document.querySelector('.ytb');
const description = document.querySelector('.description');
const createdBy = document.querySelector('.createdBy')



link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        helloEl.textContent = data[attr].hello;
        youngEl.innerHTML = data[attr].young;
        aboutEl.textContent = data[attr].about;
        xpEl.textContent = data[attr].xp;
        introEl.textContent = data[attr].intro;
        titleEl.textContent = data[attr].title;
        csEl.textContent = data[attr].censthusiast;
        csEl2.textContent = data[attr].censthusiast2;
        csP.innerHTML = data[attr].csP;
        designer.textContent = data[attr].designer;
        designer2.textContent = data[attr].designer2;
        desDes.innerHTML = data[attr].desDes;
        entrepreneur.textContent = data[attr].entrepreneur;
        entrepreneur2.textContent = data[attr].entrepreneur2;
        entreDes.innerHTML = data[attr].entreDes;
        xp2El.innerHTML = data[attr].xp2;
        xpDes.innerHTML = data[attr].xpDes;
        sutm.innerHTML = data[attr].sutm;
        zmg.innerHTML = data[attr].zmg;
        pdj.innerHTML = data[attr].pdj;
        ytb.innerHTML = data[attr].ytb;
        description.textContent = data[attr].description;
        createdBy.textContent = data[attr].createdBy;
    });
});

var data = {
  "english": {
    "xp":"Experience",
    "about": "About",
    "hello": "Hello, I'm",
    "young": '<h1 class="young">Tom Hausmann,<br>Young <span style="color: #47814A">Website Builder</span></h1>',
    "intro": "I’m a 16 years old web and mobile developper ! I’m young, ambitious and motivated to build your website or your app ! I’m currently learning coding in Poitiers, France.",
    "title": "Who am I ?",
    "censthusiast": "A computer enthusiast",
    "censthusiast2": "A computer enthusiast",
    "csP":'Since i’m 7, i’ve always been interested into computer science 💻 <br> <br> I created a lot of projects, and each of them brought me experience ! (you can see them in my <a href="#portfolio">portfolio</a> ) <br> <br> Here are the technologies that i work with :',
    "designer":"A designer",
    "designer2":"A designer",
    "desDes":'I also love being part of the design, even if it’s not my original job. <br> <br> If you wish to <a href="#contact">contact me</a>, we could negotiate the design of your website 🖌️ <br> For example, i designed this website all by myself ! <br> I know how to use general design assets like :',
    "entrepreneur":"An entrepeneur",
    "entrepreneur2":"An entrepeneur",
    "entreDes":'I’m really interested in building a start-up ! 🏢 <br> <br> I\'ll create a page soon to describe my project :) <br><br> As i describe it in <a href="#experience">My experience</a>, i’ve done a few contests about entrepreneuship <br><br> I would be really excited to work in a start-up or a growing company, so if you want to contact me, i’m open to offers !',
    "xp2":"My experience",
    "xpDes":'I’m 16, but i’ve already worked with few people ! I also have done some contests about entrepreneurship 🖥️ <br> <br> Here are my experiences :',
    "sutm": '<a href="https://startuptoimeme.com/">StartUp toi-même</a> 2021 contest',
    "zmg":'<a href="https://www.zimages.fr/">Zimages</a>  internship and <a href="https://sphax5117.github.io/RapportStage/"> website creation </a>',
    "pdj": 'Les Portrait de Joy website creation',
    "ytb":'<a href="https://www.youtube.com/channel/UCsA-TlQxgvxeX_-CYru0iQQ">Youtube</a>  channel ',
    "description":'If you ever want to contact me, click on the links below !',
    "createdBy":"Created by Tom Hausmann",
  },
  "french": {
    "xp":"Expérience",
    "about": "À propos",
    "hello": "Bonjour, je suis",
    "young": '<h1 class="young">Tom Hausmann,<br>Jeune <span style="color: #47814A">créateur de sites</span></h1>',
    "intro": "Je suis un développeur web de 16 ans ! Je suis jeune, ambitieux et motivé pour construire votre site web ou votre application ! J'apprends pour le moment la programmation à Poitiers.",
    "title": "Qui suis-je ?",
    "censthusiast": "Un passioné d'informatique",
    "censthusiast2": "Un passioné d'informatique",
    "csP":'Depuis que j\'ai 7 ans, je me suis toujours interessé à l\'informatique💻 <br> <br> J\'ai developpé quelques projets, et ils m\'ont tous apporté de l\'expérience ! (Vous pouvez les voirs dans mon <a href="#portfolio">portfolio</a> ) <br> <br> Voici les technologies avec lesquelles je travaille :',
    "designer":"Un designer",
    "designer2":"Un designer",
    "desDes":'J\'aime aussi beaucoup faire partie du design d\'un site ! <br> <br> Si vous souhaitez me <a href="#contact">contacter</a>, je pourrai également créer le design de votre site web 🖌️! <br> <br> Par exemple, j\'ai designé ce site moi-même ! <br> Je sais utiliser les principaux outils de design comme :',
    "entrepreneur":"Un entrepeneur",
    "entrepreneur2":"Un entrepeneur",
    "entreDes":'J\'adorerais créer ma Start-Up ! 🏢 <br> <br> I\'ll vais bientôt créer une page pour présenter mon nouveau projet. <br><br> Comme je le décris dans <a href="#experience">Mon expérience</a>, j\'ai fait un concours de StartUp ! <br><br> J\'aimerais beaucoup pouvoir travailler ou faire un stage dans une startup, je suis donc ouvert à toute expérience !',
    "xp2":"Mon expérience",
    "xpDes":'J\'ai 16 ans, mais j\'ai déjà travaillé avec plusieurs personnes ! J\'ai également fait un concours de Start-Up :) 🖥️ <br> <br> Voici mes différentes expériences professionnelles ',
    "sutm": 'Concours 2021 <a href="https://startuptoimeme.com/">StartUp toi-même</a>',
    "zmg":'Stage chez <a href="https://www.zimages.fr/">Zimages</a> et <a href="https://sphax5117.github.io/RapportStage/">création de site</a>',
    "pdj": 'Création du site Les Portrait de Joy',
    "ytb": 'Chaîne <a href="https://www.youtube.com/channel/UCsA-TlQxgvxeX_-CYru0iQQ">Youtube</a>', 
    "description":'Si vous souhaitez me contacter, cliquez sur les liens ci-dessous !',
    "createdBy":"Créé par Tom Hausmann"
  }
};