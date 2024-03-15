
let conception = document.querySelector('.btn-reserve');
let navbar = document.querySelector('.navbar');
conception.onclick = () => {
  navbar.classList.toggle('active');
}



window.onscroll = () =>{
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100)

  let section = document.querySelectorAll('section');
  let nav = document.querySelectorAll('header nav a ');

  section.forEach(sec =>{
  let top = window.scrollY;
  let offset = sec.offsetTop - 100;
  let height = sec.offsetHeight;
  let id = sec.attributes ('id');

  sec.classList.add('show-animate');


  if(top >= offset && top >= offset + height){
    
    nav.forEach(nav =>{
      nav.classList.remove('active');
      document.querySelector('header nav a[href*=' + id  + ']').classList.add("active")
    });
  }
  else{
    sec.classList.remove('show-animate')
  }
  });

}


