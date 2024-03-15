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
  startAutoSlide(); // 자동 슬라이드 시작 함수 호출
  playBtn.style.display = 'none'; // play 버튼 숨김
  stopBtn.style.display = 'inline-block'; // stop 버튼 표시
});

// stop 버튼 클릭 시 자동 슬라이드 중지
stopBtn.addEventListener('click', function() {
  stopAutoSlide(); // 자동 슬라이드 중지 함수 호출
  playBtn.style.display = 'inline-block'; // play 버튼 표시
  stopBtn.style.display = 'none'; // stop 버튼 숨김
});

// 5초마다 자동 슬라이드 함수
function startAutoSlide() {
  intervalId = setInterval(() => {
    nextRadioButton(); // 다음 라디오 버튼 선택 함수 호출
  }, 5000);
}

// 자동 슬라이드 중지 함수
function stopAutoSlide() {
  clearInterval(intervalId); // 인터벌 해제
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
  console.log(currentIdx, slideCount);
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