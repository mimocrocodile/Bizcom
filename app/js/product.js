let allRadioInputs = document.querySelectorAll(".cataloglist__filter-radio input"), allRadioLabels = document.querySelectorAll(".cataloglist__filter-radio label")
for(let i = 0; i<allRadioInputs.length; i++){
    allRadioInputs[i].id = "filter-color"+i
    allRadioLabels[i].htmlFor = "filter-color"+i
    allRadioLabels[i].id = "label-color"+i
}


$('.product__slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product__slider-bottom'
  });
  $('.product__slider-bottom').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.product__slider-main',
    dots: false,
    centerPadding: '40px',
    centerMode: true,
    focusOnSelect: true
  });


  $(document).ready(function(){
    $(".product-recently-owl").owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        margin: 10,
    });
  });

  $('.product-recently-arrowright').click(function() {
    $(".product-recently-owl").trigger('next.owl.carousel');
})
$('.product-recently-arrowleft').click(function() {
    $(".product-recently-owl").trigger('prev.owl.carousel');
})


let productCardBtns = document.querySelectorAll(".product__card-action")
let productCards = document.querySelectorAll(".product__card-info")
productCardBtns.forEach(el=>{
    el.addEventListener("click", ()=>{
        for(let i = 0; i<productCards.length; i++){
            productCards[i].classList.contains("hidden") ? null : productCards[i].classList.add("hidden")
            productCardBtns[i].classList.contains("product-active-nav") ? productCardBtns[i].classList.remove("product-active-nav") : null
            if(el.dataset.productCard == productCards[i].dataset.productCard){
                el.classList.contains("product-active-nav") ? null : el.classList.add("product-active-nav")
                productCards[i].classList.contains("hidden") ? productCards[i].classList.remove("hidden") : null
            }
        }
    })
})