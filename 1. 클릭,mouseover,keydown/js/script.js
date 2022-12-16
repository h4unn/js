var btn = document.querySelector('#submit');
var container = document.querySelector('.container');

//1
btn.addEventListener('click',function(){
   btn.style.color = 'red';
});
//2
container.addEventListener('mouseover',function(){
   console.log('mouseover');
});
container.addEventListener('mouseout',function(){
   console.log('mouseout');
});

window.addEventListener('keydown',function(event){
   console.log(event.key);
});


/*
   event종류
   click
   change = input 요소에 변동이 있을 때
   focus = ex) link,input
   keydown = 키를 눌렀을 떄 발생
   keyup = 키에서 손을 땟을 때
   load = 로드가 완료 되었을 때 발생
   mousedown = 마우스를 클릭 했을 때 발생
   mouseup = 마우스에서 손을 땟을 때
   mouseover
   mouseout
   mouseenter = 마우스가 특정 객체 안에 들어왔을 떄
   mouseleave 
   select = option 태그 등에서 선택을 핼 을 때 발생
*/