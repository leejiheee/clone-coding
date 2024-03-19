//slide1
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const radioButtons = document.querySelectorAll('input[name="tabmenu"]');
let currentIndex = 0;
let intervalId;
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');

// 다음버튼 눌렀을 때
nextBtn.addEventListener('click', function() {
  nextRadioButton();
});

// 이전버튼 눌렀을 때
prevBtn.addEventListener('click', function() {
  prevRadioButton();
});

// 다음 라디오 버튼 체크 함수
function nextRadioButton() {
  currentIndex++;
  if (currentIndex >= radioButtons.length) {
    currentIndex = 0; 
  }
  if (currentIndex === radioButtons.length - 1) {
    nextBtn.disabled = true; 
  }
  prevBtn.disabled = false; 
  radioButtons[currentIndex].checked = true;
}
// 이전 라디오 버튼 체크 함수
function prevRadioButton() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = radioButtons.length - 1;
  }
  if (currentIndex === 0) {
    prevBtn.disabled = true;
  }
  nextBtn.disabled = false;
  radioButtons[currentIndex].checked = true;
}
function autoNextRadioButton() {
  intervalId = setInterval(() => {
    nextRadioButton();
  }, 5000);
}
autoNextRadioButton();

window.addEventListener('blur', function() {
  clearInterval(intervalId);
});
window.addEventListener('focus', function() {
  autoNextRadioButton();
});
playBtn.addEventListener('click', function() {
  startAutoSlide();
  playBtn.style.display = 'none';
  stopBtn.style.display = 'inline-block';
});

stopBtn.addEventListener('click', function() {
  stopAutoSlide();
  playBtn.style.display = 'inline-block';
  stopBtn.style.display = 'none';
});

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextRadioButton();
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}
// slide2
var slides = document.querySelector('.business_items'),
    slideItem = document.querySelectorAll('.business_item'),
    currentIdx = 0,
    slideCount = slideItem.length,
    slideWidth = 395,
    slideMargin = 48,
    prevBtn2 = document.querySelector('.business_prev'),
    nextBtn2 = document.querySelector('.business_next');

makeClone();
function makeClone(){
  for(var i=0; i<slideCount; i++){
    var cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.appendChild(cloneSlide);
  }
  for(var i = slideCount -1; i>=0; i--){
    var cloneSlide = slideItem[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(function(){
    slides.classList.add('animated');
  },100);
}
function updateWidth(){
  var currentSlide = document.querySelectorAll('.business_item');
  var newSlideCount = currentSlide.length;

  var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
  slides.style.width = newWidth;
}
function setInitialPos(){
  var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}
nextBtn2.addEventListener('click', function(){
  moveSlide(currentIdx + 1);
});
prevBtn2.addEventListener('click', function(){
  moveSlide(currentIdx - 1);
});
function moveSlide(num){
  slides.style.left = -num * (slideWidth + slideMargin) + 'px';
  currentIdx = num;
  if(currentIdx == slideCount || currentIdx == -slideCount){
    setTimeout(function(){
      slides.classList.remove('animated');
      slides.style.left = '0px';
      currentIdx = 0;
    }, 500);
    setTimeout(function(){
      slides.classList.add('animated');
    }, 600);
  }
}
//slide3
var slides2 = document.querySelector('.banner_slider'),
    slide2 = document.querySelectorAll('.banner_item'),
    currentIdx2 = 0,
    slideCount2 = slide2.length,
    prevButton = document.querySelector('.banner_prev'),
    slideWidth2 = 142,
    slideMargin2 = 54,
    nextButton = document.querySelector('.banner_next'),
    stopButton = document.querySelector('#stop'),
    startButton = document.querySelector('#start');

    slides2.style.width = (slideWidth2 + slideMargin2) * slideCount2 - slideMargin2 + 'px';

     function moveSlide2(num){
      slides2.style.left = -num * (slideWidth2 + slideMargin2) + 'px';
      currentIdx2 = num;
     }
     nextButton.addEventListener('click', function(){
      if(currentIdx2 < slideCount2 - 7){
        moveSlide2(currentIdx2 + 1);
      }
     })
     prevButton.addEventListener('click', function(){
      if(currentIdx2 > 0){
        moveSlide2(currentIdx2 - 1);
      }
     })

     //자동슬라이드
     var timer = undefined;

     function autoSlide2(){
      if(timer == undefined){
        timer = setInterval(function(){
          if(currentIdx2 < 3){
            moveSlide2(currentIdx2 + 1);
          }
        }, 5000)
      }
     }
     autoSlide2();
    function stopSlide2(){
      clearInterval(timer);
      timer = undefined;
    }
    console.log(stopButton);
    stopButton.addEventListener('click', function(){
      stopSlide2();
      startButton.style.display = 'block';
      stopButton.style.display = 'none';
    });
    startButton.addEventListener('click', function(){
      autoSlide2();
      startButton.style.display = 'none';
      stopButton.style.display = 'block';
    });