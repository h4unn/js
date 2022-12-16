document.addEventListener("DOMContentLoaded", function () {
  // 변수 지정
    var sliderWrapper = document.querySelector('.container'),
        sliderContainer = document.querySelector('.slider-container'),
        slides = document.querySelectorAll('.slide'),
        slideCount = slides.length,
        currentIndex = 0,
        topHeight = 0,
        navPrev = document.querySelector('#prev'),
        navNext = document.querySelector('#next');

        

  //슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
    tallestSlide()
    function tallestSlide(){
        for(var i = 0; i < slideCount; i++){
            if(topHeight <  slides[i].offsetHeight){
                topHeight = slides[i].offsetHeight;
            }
        }
        sliderWrapper.style.height = topHeight + 'px';
        sliderContainer.style.height = topHeight + 'px';
    }
    
  // 슬라이드가 있으면 가로로 배열하기
    for(var i = 0; i < slideCount; i++){
        slides[i].style.left = i * 100 + '%';
    }
    goToSlide(0);
  // 슬라이드 이동 함수
    function goToSlide(idx){
        sliderContainer.style.left = idx * -100 + '%';
        sliderContainer.classList.add('animated');
        currentIndex = idx;
        // updateNav();
    }

  // 버튼을 클릭하면 슬라이드 이동시키기
    navPrev.addEventListener('click',function(e){
        e.preventDefault();
        // goToSlide(currentIndex - 1);
        // if(currentIndex == 0){
        //     goToSlide(slideCount - 1);
        // }else{
        //     goToSlide(currentIndex -1);
        // }
        (currentIndex == 0) ? goToSlide(slideCount -1) : goToSlide(currentIndex -1);
    });
    navNext.addEventListener('click',function(e){
        e.preventDefault();
        // goToSlide(currentIndex + 1);
        (currentIndex == slideCount -1) ? goToSlide(0) : goToSlide(currentIndex + 1);
    });
    
    // 버튼기능 업데이트 함수
    function updateNav(){
        // if(currentIndex == 0){
        //     navPrev.classList.add('disabled');
        // }else{
        //     navPrev.classList.remove('disabled');
        // }
        // if(currentIndex == slideCount - 1){
        //     navNext.classList.add('disabled');
        // }else{
        //     navNext.classList.remove('disabled');
        // }
        (currentIndex == 0) ? navPrev.classList.add('disabled') : navPrev.classList.remove('disabled');
        (currentIndex == slideCount - 1) ? navNext.classList.add('disabled') : navNext.classList.remove('disabled');
    }
  //자동 슬라이드
}); //DOMcontentloaded
