var imgList = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.querySelector(".lightbox-container");
var lightBoxItem = document.querySelector(".lightbox-item");
var currentSlideIndex;
var nextBtn = document.getElementById("next");
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

for (var i = 0; i < imgList.length; i++) {
  imgList[i].addEventListener("click", function (e) {
    lightBoxContainer.classList.replace("d-none", "d-flex");

    currentSlideIndex = imgList.indexOf(e.target); //0 1 2 3 4 5

    console.log ( currentSlideIndex );
    // currentSlideIndex =i ;
    var imgSrc = e.target.getAttribute("src");
    console.log(imgSrc);
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
  });
}

function nextSlide() {
  currentSlideIndex++;
  console.log(currentSlideIndex);
  var imgSrc = imgList[currentSlideIndex].getAttribute('src');
  lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

console.log(nextBtn)
console.log(prevBtn)
console.log(closeBtn)

nextBtn.addEventListener("click", function () {
  console.log("Next button clicked");
  nextSlide();
});



function prevSlide() {
    currentSlideIndex--; // الانتقال للصورة السابقة
    if (currentSlideIndex < 0) {
      currentSlideIndex = imgList.length - 1; // الانتقال إلى آخر صورة إذا كنت عند أول صورة
    }
    var imgSrc = imgList[currentSlideIndex].getAttribute("src");
    console.log("Previous image:", imgSrc);
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`; // عرض الصورة السابقة في الـ Lightbox
  }

  // ربط حدث الزر "Previous"
  prevBtn.addEventListener("click", prevSlide);


  closeBtn.addEventListener("click", function () {
    lightBoxContainer.classList.replace("d-flex", "d-none"); // إخفاء الـ Lightbox
  });


  document.addEventListener("keydown", function (e) {
    
      switch (e.key) {
        case "ArrowRight": // السهم الأيمن
          nextSlide();
          break;
        case "ArrowLeft": // السهم الأيسر
          prevSlide();
          break;
        case "Escape": // زر الإغلاق
          closeLightbox();
          break;
      
    }
  });


  lightBoxContainer.addEventListener('click', function(e) {
    closeSlider();
});

lightBoxItem.addEventListener('click', function(e) {
    e.stopPropagation();
});