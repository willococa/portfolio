const hamburguer = document.querySelector('.breadcrumb');
const menu = document.querySelector('.desktop-nav');

const section = document.querySelector('.section');		  
const popup = document.querySelector("#popup-display");
const  projects = [
     {
       name: "Tonic",
       duetimes: {place:"Canopy", ocupation: "Back end Dev", time: "2015"},
       img_url: "assets/Snapshoot-Portfolio.png",
       text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
       techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li>\n<li><a href="#">Ruby</a></li>\n<li><a href="#">Bootstrap</a></li>',
       linkLive: 'https://willococa.github.io/portfolio/',
       linkSource: 'https://github.com/willococa/portfolio',

     },
     {
       name: "Multi-Post Stories",
       duetimes: {place:"Canopy", ocupation: "Back end Dev", time: "2015"},
       img_url: "assets/snapportfolio2.png",
       text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
       techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li>\n<li><a href="#">Ruby</a></li>\n<li><a href="#">Bootstrap</a></li>',
       linkLive: 'https://willococa.github.io/portfolio/',
       linkSource: 'https://github.com/willococa/portfolio',

     },
     {
       name: "Facebook 360",
       duetimes: {place:"Canopy", ocupation: "Back end Dev", time: "2015"},
       img_url: "assets/snapportfolio3.png",
       text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
       techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li>\n<li><a href="#">Ruby</a></li>\n<li><a href="#">Bootstrap</a></li>',
       linkLive: 'https://willococa.github.io/portfolio/',
       linkSource: 'https://github.com/willococa/portfolio',

     },
     {
       name: "Uber Navigation",
       duetimes: {place:"Canopy", ocupation: "Back end Dev", time: "2015"},
       img_url: "assets/snapportfolio4.png",
       text: `Lorem Ipsum is simply dummy text of the printing and typesetting 
       industry. Lorem Ipsum has been the industry's standard dummy text ever 
       since the 1500s, when an unknown printer took a galley of type and 
       scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing 
       and typesetting industry.\n
       Lorem Ipsum has been the industry's standard dummy text ever since 
       the 1500s, when an unknown printer took a galley of type and scrambled it 
       1960s with the releorem Ipsum is simply dummy text of the printing and 
       typesetting industry. Lorem Ipsum han printer took a galley of type and 
       scrambled it 1960s with the releawn printer took a galley of type and 
       scrambled it 1960s.`,
       techTags: '<li><a href="#">HTML</a></li>\n<li><a href="#">CSS</a></li>\n<li><a href="#">JavaScript</a></li>\n<li><a href="#">Ruby</a></li>\n<li><a href="#">Bootstrap</a></li>',
       linkLive: 'https://willococa.github.io/portfolio/',
       linkSource: 'https://github.com/willococa/portfolio',

     },
  ]
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('inactive');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('inactive');
}));

document.querySelectorAll('.project').forEach((n) => n.addEventListener('click', () => {
  let id = n.id.split('-').slice(-1)
  showPopUp(id)
}));