// 해당 위치 이미지 움직이는 효과
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll('.slide-in')

function moveImg(){
  images.forEach(img => {
    // (window 스크롤 값 + window안쪽 높이) - 이미지 높이 / 2
    const slideIn = (window.scrollY + window.innerHeight) - img.height / 2
    // 이미지 위치값 + 이미지 높이
    const imageBottom = img.offsetTop + img.height
    // 사진이 제 자리를 찾아오는게 이미지위치 값보다 클 때
    const isHalfShown = slideIn > img.offsetTop
    // 창 스크롤 값이 이미지 밑부분보다 작을 때
    const notScroll = window.scrollY < imageBottom
    // console.log(isHalfShown, notScroll);

    
    if (isHalfShown && notScroll) {
      img.classList.add('active')
    } else { 
      // img.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(moveImg))

const scollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', function(){
  let height = window.scrollY
  // console.log(height);
  if(height > 200) {
    document.querySelector('.nav').classList.add('black')
  } else {
    document.querySelector('.nav').classList.remove('black')
  }

  if(height > 1000) {
    scollTop.classList.add('top')
  } else {
    scollTop.classList.remove('top')
  }
})


scollTop.addEventListener('click', function(){
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
})