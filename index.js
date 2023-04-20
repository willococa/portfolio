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

function  showPopUp(id) {	
  let project = projects[id-1]	
  popup.classList.toggle('splash');
  document.body.classList.add('popupstate')
  navMenu.classList.toggle('navlinkpopupstate')
  popup.innerHTML += `		
<div class="popup pop-1 work-item-list">			
  <div class="pop-header"><h2>${project.name}</h2> <a href="#" id="exit-btn">X</a></div>
  <ul class="due-time">
    <li class="company-name">${project.duetimes.place}</li>
    <li>${project.duetimes.ocupation}</li>
    <li>${project.duetimes.time}</li>
  </ul>
  <div class="popup-image">
    <img src="${project.img_url}" alt="${project.name} image">		
  </div>
  <div class="info">
  <div class="text">
      
  <p>${project.text}</p>
  </div>
  <aside>				
    <ul class="tech-tags">
      ${project.techTags}
    </ul>
    <div  class="link-tags">
      <a href="${project.linkLive}" class="big-btn">See Live <img class="live-icon" src="assets/Icon1.png" alt="Live Icon"></a>
      <a href="${project.linkSource}" class="big-btn">Source <img class="live-icon" src="assets/Icon -GitHub.png" alt="Github Icon"></a>
    </div>
  </aside>
  </div>
</div>`

  const exitButton = document.getElementById('exit-btn');
  exitButton.addEventListener('click', () => {      	
    popup.classList.toggle('splash');
    document.body.classList.remove('popupstate')
    navMenu.classList.toggle('navlinkpopupstate')
    popup.innerHTML = '';
  });
}