let bt1 = document.querySelector('.btn1');
bt1.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(0)'
})

let bt2 = document.querySelector('.btn2');
bt2.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-100vw)'
})

let bt3 = document.querySelector('.btn3');
bt3.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-200vw)'
})

let bt4 = document.querySelector('.btn4');
bt4.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-300vw)'
})

let bt5 = document.querySelector('.btn5');
bt5.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-400vw)'
})

let bt6 = document.querySelector('.btn6');
bt6.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-500vw)'
})

let bt7 = document.querySelector('.btn7');
bt7.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-600vw)'
})

let bt8 = document.querySelector('.btn8');
bt8.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-700vw)'
})

let bt9 = document.querySelector('.btn9');
bt9.addEventListener('click', function(){
  document.querySelector('.img-list>ul').style.transform = 'translate(-800vw)'
})

//aside

let sid = document.querySelector('.img-list');
sid.addEventListener('click', function(){
  document.querySelector('.sid').style.transform = 'translateY(100vh)'
});

let opening = document.querySelector('header');
opening.addEventListener('click' , function(){
  document.querySelector('.sid').style.transform = 'translateY(0)'
});





// menu
$('.menu-list>ul>li>a').hover(function(){
  $('.hihi').css({'display' : 'block'})
}, function(){
  $('.hihi').css({'display':'none'})
});

