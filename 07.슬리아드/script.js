document.addEventListener("DOMContentLoaded", function () {
  // 변수 지정
    var $slideWrap = document.querySelector(".container"),
        $slideContainer = document.querySelector(".slider-container"),
        $slide = document.querySelectorAll(".slide"),
        $navPrev = document.getElementById("prev"),
        $slideHeight = 0,
        $slideCount = $slide.length,
        $currentIndex = 0,
        $pager = document.querySelector(".pager"),
        $pagerBtn = document.querySelectorAll(".pager span"),
        $navNext = document.getElementById("next");
    var $timer;

//슬라이드의 높이 확인하여 부모의 높이로 지정하기 - 대상.offsetHeight
    for (var i = 0; i < $slideCount; i++) {
        if ($slideHeight < $slide[i].offsetHeight) {
        $slideHeight = $slide[i].offsetHeight;
        }
    }

    $slideWrap.style.height = $slideHeight + "px";
    $slideContainer.style.height = $slideHeight + "px";

// 슬라이드가 있으면 가로로 배열하기
    for (var a = 0; a < $slideCount; a++) {
        $slide[a].style.left = a * 100 + "%";
    }

    goToSlide(0);
// 슬라이드 이동 함수
    function goToSlide(idx) {
        $slideContainer.classList.add("animated");
        $slideContainer.style.left = -100 * idx + "%";
        $currentIndex = idx;
    } //goToSlide

// 버튼을 클릭하면 슬라이드 이동시키기
    $navPrev.addEventListener("click", function () {
        //goToSlide($currentIndex - 1);

        if ($currentIndex == 0) {
        //$navPrev.classList.add('disabled');
        goToSlide($slideCount - 1);
        } else {
        //$navPrev.classList.remove('disabled');
        goToSlide($currentIndex - 1);
        }
    });

    $navNext.addEventListener("click", function () {
        //goToSlide($currentIndex + 1);

        if ($currentIndex == $slideCount - 1) {
        // $navNext.classList.add('disabled');
        goToSlide(0);
        } else {
        // $navNext.classList.remove('disabled');
        goToSlide($currentIndex + 1);
        }
    });

//자동 슬라이드
    //4초마다 할 일 goToSlide(숫자?); 0,1,2,3..5, 0
    //setInterval(할일, 4000);
    //자동 슬라이드 함수
    autoSlide();
    function autoSlide(){
        $timer = setInterval(function(){
            nextIdx = ($currentIndex + 1) % $slideCount;
            goToSlide(nextIdx);
        },2000); 
    }

    $slideWrap.addEventListener('mouseenter',function(){
        clearInterval($timer);
    });
    $slideWrap.addEventListener('mouseleave',function(){
        autoSlide();
    });
}); 
