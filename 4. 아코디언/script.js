document.addEventListener('DOMContentLoaded',function(){

   var btnCollapse = document.querySelector('#btn-collapse'),
   heading = document.querySelectorAll('.panel-heading'),
   question = document.querySelectorAll('.panel-question'),
   answer = document.querySelectorAll('.panel-body');
   
   // 제목을 클릭하면 할 일
   for(var i = 0; i < heading.length; i++){
      heading[i].addEventListener('click',function(e){
         for(var j = 0; j < question.length; j++){
            question[j].classList.remove('active');
         }
         this.parentNode.classList.add('active');
         activeBody();
      });   
   }
   activeBody();

   function activeBody(){
      for(var x = 0; x < answer.length ; x++){
         answer[x].style.display = 'none';
      }

      var activePanel = document.querySelector('.panel-question.active .panel-body');
      activePanel.style.display = 'block';
   }

   btnCollapse.addEventListener('click',function(){
      for(var i = 0; i < question.length; i++){
         answer[i].style.display = 'none';
      }
   });

});

