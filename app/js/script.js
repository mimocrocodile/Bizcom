$(document).ready(function () {
    $(".main-owl-top").owlCarousel({
        items: 1,
        // nav: true,
        autoplay: true,
        loop: true,
    });
});

$(document).ready(function () {
    $(".main-special-owl").owlCarousel({
        dots: false,
        loop: true,

        responsive: {
            360: {
                items: 1,
                center: false,
                stagePadding: 90,
                // slideBy:1,
                startPosition: 2,
                margin: 12,
            },
            1025: {
                items: 5,
                margin: 10,
            }
        },

    });
});
$(document).ready(function () {
    $(".main-hits-owl").owlCarousel({
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 2.2,
                center: true,
                slideBy: 1,
                margin: 12,
            },
            1025: {
                items: 5,
                margin: 10,
            }
        }
    });
});
$(document).ready(function () {
    $(".main-categories-owl").owlCarousel({
        dots: false,
        responsive: {
            360: {
                slideBy: 1,
                items: 2.7,
                loop: true,
                margin: 12
            },
            1025: {
                loop: false,
                items: 6,
                margin: 30,
            }
        }
    });
});
$(document).ready(function () {
    $(".header__catalogitem-brands").owlCarousel({
        items: 6,
        dots: false,
        loop: true,
        nav: true,
        margin: 50,
    });
});
$(document).ready(function () {
    $(".main-bonus-owl").owlCarousel({
        items: 2,
        dots: false,

        // margin: 30,
        responsive: {
            360: {
                // items: 1.4,
                // loop: true,
                loop: false,
                items: 1,
                // stagePadding: 50,
                slideBy: 1,
                margin: 12
            },
            1000: {
                items: 2,
                margin: 30
            }
        },
        // onDragged: checkBonus
    });
});
$(document).ready(function () {
    $(".main-article-owl").owlCarousel({
        items: 2,
        dots: false,

        margin: 30,
        0: {
            items: 1.5,
        },
        1000: {
            items: 2
        }
    });
});

var owl = $('.main-owl-top');
var middleSlider = $('.main-special-owl')
var hitSlider = $('.main-hits-owl')
var catalogSlider = $('#brands1'), catalogSlider2 = $('.header__catalogitem-brands2'), catalogSlider3 = $('.header__catalogitem-brands3'), catalogSlider4 = $('.header__catalogitem-brands4'),
    catalogSlider5 = $('.header__catalogitem-brands5'), catalogSlider6 = $('.header__catalogitem-brands6')
$('#catalog-arrowright1').click(function () {
    catalogSlider.trigger('next.owl.carousel');
})
$('#catalog-arrowleft1').click(function () {
    catalogSlider.trigger('prev.owl.carousel');
})
$('.header__catalogitem-arrowright2').click(function () {
    catalogSlider2.trigger('next.owl.carousel');
})
$('.header__catalogitem-arrowleft2').click(function () {
    catalogSlider2.trigger('prev.owl.carousel');
})
$('.main__hits-arrowright').click(function () {
    hitSlider.trigger('next.owl.carousel');
})
$('.main__hits-arrowleft').click(function () {
    hitSlider.trigger('prev.owl.carousel');
})
$('.main__special-arrowright').click(function () {
    middleSlider.trigger('next.owl.carousel');
})
$('.main__special-arrowleft').click(function () {
    middleSlider.trigger('prev.owl.carousel');
})
$('.main__slide-arrowright').click(function () {
    owl.trigger('next.owl.carousel');
})
$('.main__slide-arrowleft').click(function () {
    owl.trigger('prev.owl.carousel');
})





let cards = document.querySelectorAll(".main__card")


// cards.forEach(element => {
//     element.addEventListener("mouseover", ()=>{
//         let cardBtns = element.querySelectorAll(".main__card-btn")
//         cardBtns.forEach(el=>{
//             el.style.display = "flex"
//         })
//         element.querySelector(".main__card-cart").style.display = 'flex'
//     })
//     element.addEventListener("mouseout", ()=>{
//         let cardBtns = element.querySelectorAll(".main__card-btn")
//         cardBtns.forEach(el=>{
//             el.style.display = "none"
//         })
//         element.querySelector(".main__card-cart").style.display = 'none'
//     })
// });

let catalogListItems = document.querySelectorAll(".header__cataloglist-item")

catalogListItems.forEach(element => {
    element.addEventListener("mouseover", () => {
        let catalogItem = element.querySelector(".header__catalogitem")
        catalogItem.style.display = "flex"
    })
    element.addEventListener("mouseout", () => {
        let catalogItem = element.querySelector(".header__catalogitem")
        catalogItem.style.display = "none"
    })
})

let headerCatalog = document.querySelector(".header__catalog")
let headerCatalogList = document.querySelector(".header__cataloglist")
// let headercatalogItem = document.quer
headerCatalog.addEventListener("click", () => {
    console.log("11")
    headerCatalogList.classList.contains("visible") ? headerCatalogList.classList.remove("visible") : headerCatalogList.classList.add("visible")
})

window.addEventListener("click", (event) => {
    if (event.target != headerCatalogList && event.target != headerCatalog && event.target.dataset.headerarrow != "1") {
        headerCatalogList.classList.contains("visible") ? headerCatalogList.classList.remove("visible") : null
    }
})


let mainCategoriesItems = document.querySelectorAll(".main__categories-item")

mainCategoriesItems.forEach(element => {
    element.addEventListener("mouseover", () => {
        let mainCategoriesTitle = element.querySelector(".main__categories-title a")
        let mainCategoriesImg = element.querySelector(".main__categories-img img")
        mainCategoriesTitle.style.color = "#0049FF"
        mainCategoriesTitle.style.textDecoration = "underline"
    })
    element.addEventListener("mouseout", () => {
        let mainCategoriesTitle = element.querySelector(".main__categories-title a")
        mainCategoriesTitle.style.color = "#737782"
        mainCategoriesTitle.style.textDecoration = "none"
    })
});

let cartBar = document.querySelectorAll(".main__card-plusminus")


cartBar.forEach(element => {
    element.addEventListener("click", (event) => {
        let cartMinus = element.querySelector(".main__card-minus")
        let cartPlus = element.querySelector(".main__card-plus")
        let cartInput = element.querySelector("input")
        if (event.target == cartMinus) {
            parseInt(cartInput.value) > 0 ? cartInput.value = parseInt(cartInput.value) - 1 : null
        }
        if (event.target == cartPlus) {
            cartInput.value = parseInt(cartInput.value) + 1
        }
    })
})

let cartBtns = document.querySelectorAll(".main__card-cartbtn button")

if (window.innerWidth <= 400) {
    cartBtns.forEach(el => {
        el.innerHTML = ""
    })
}


// function checkBonus(event){
//     let bonus = document.querySelector(".main-bonus-owl .owl-stage")
//     console.log(bonus)
//     if(event.item.index == event.item.count-1){
//         // bonus.style.paddingRight = "0 "
//         // bonus.style.paddingLeft = "auto"+"!important"
//         bonus.setAttribute('style', 'padding-right: 0px !important; padding-left: 50px !important')
//         console.log(bonus.style)
//     }
//     // if(event.item.index ==s0){
//     //     // bonus.style.paddingRight = "0 "
//     //     // bonus.style.paddingLeft = "auto"+"!important"
//     //     bonus.setAttribute('style', 'padding-left: 0 !important')
//     //     bonus.setAttribute('style', 'padding-right: 50px !important')
//     //     console.log(bonus.style)
//     // }
// }


let mobmenuBtns = document.querySelectorAll(".mobmenu__nav-btnmain")


mobmenuBtns.forEach(el => {
    el.addEventListener("click", () => {
        mobmenuBtns.forEach(element => {
            element.classList.contains("mobmenu__nav-active") ? element.classList.remove("mobmenu__nav-active") : null
        })
        el.classList.add("mobmenu__nav-active")
        let mobmenuBlocks = document.querySelectorAll(".mobmenu div div")
        for (let index = 0; index < mobmenuBlocks.length; index++) {
            if (mobmenuBlocks[index].dataset.content) {
                if (el.dataset.content == mobmenuBlocks[index].dataset.content) {
                    mobmenuBlocks[index].classList.remove("hidden")
                }
                else {
                    mobmenuBlocks[index].classList.add("hidden")
                }
            }
        }
    })
})

let mobmenuItems = document.querySelectorAll(".mobmenu__item")
let mobmenuBottom = document.querySelector(".mobmenu__bottom"), mobmenuMain = document.querySelector(".mobmenu__main"),
    mobmenuCategory = document.querySelector(".mobmenu__category"), mobmenuNavBtns = document.querySelectorAll(".mobmenu__nav-btn")
mobmenuItems.forEach(el => {
    el.addEventListener("click", () => {

        mobmenuNavBtns.forEach(item => {
            item.classList.contains("mobmenu__nav-back") ? item.classList.remove("hidden") : item.classList.add("hidden")
        })
        mobmenuBottom.classList.add("hidden")
        mobmenuCategory.classList.remove("hidden")
        mobmenuMain.classList.add("hidden")
    })
})
let mobmenuCross = document.querySelector(".mobmenu__cross")
let containerMenu = document.querySelector(".container__mobilemenu")
let mobmenuIcon = document.querySelector(".header__center-menu")
let body = document.querySelector("body")
let mobmenuBackBtn = document.querySelector(".mobmenu__nav-back")
mobmenuBackBtn.addEventListener("click", () => {
    backToBegining()
})
function backToBegining() {
    mobmenuMain.classList.remove("hidden")
    mobmenuMain.querySelector(".mobmenu__catalog").classList.remove("hidden")
    mobmenuBottom.classList.remove("hidden")
    mobmenuBottom.querySelector(".mobmenu__bottom-first").classList.remove("hidden")
    mobmenuCategory.classList.add("hidden")
    mobmenuNavBtns.forEach(item => {
        item.classList.contains("hidden") ? item.classList.remove("hidden") : item.classList.add("hidden")
    })
}
mobmenuIcon.addEventListener("click", () => {
    containerMenu.classList.remove("hidden")
    body.style.overflow = "hidden"
})
mobmenuCross.addEventListener("click", () => {
    containerMenu.classList.add("hidden")
    body.style.overflow = "auto"
    backToBegining()
})

let a = document.querySelector(".main__hits-items2")
$('.main__hits-items2').scrollLeft(300);


let footerTitles = document.querySelectorAll(".footer__info-title")

footerTitles.forEach(el => {
    el.addEventListener("click", () => {
        console.log(el.nextSibling)
        if (window.innerWidth <= 400) {
            el.parentElement.querySelector(".footer__info-refs").style.display == "none" ? (el.parentElement.querySelector(".footer__info-refs").style.display = "flex", el.querySelector("div").style.transform = "rotate(180deg)") : (el.parentElement.querySelector(".footer__info-refs").style.display = "none", el.querySelector("div").style.transform = "rotate(0deg)")
        }

    })
})

let specialBtns = document.querySelectorAll(".main__special-btn")
let specialColors = ["#FF2045", "#22D263", "#FFC700"]

specialBtns.forEach((el, index) => {
    el.addEventListener("click", () => {
        if (el.classList.contains("special-click")) {
            el.style.background = "transparent"
            el.style.color = "#7D828C"
            el.style.borderColor = "#7D828C"
            el.classList.remove("special-click")
        }
        else {
            el.style.background = specialColors[index]
            el.style.color = "white"
            el.classList.add("special-click")
            el.style.borderColor = specialColors[index]
        }

    })
})


let cardCartBtns = document.querySelectorAll(".main__card-cartbtn")

cardCartBtns.forEach(el => {
    el.addEventListener("click", () => {
        console.log("da")
        el.classList.contains("main__card-cartcan") ? (el.classList.remove("main__card-cartcan"), el.querySelector("button").innerHTML = "В корзину") : (el.classList.add("main__card-cartcan"), el.querySelector("button").innerHTML = "")
    })
})

let mobilePopupSort = document.querySelector(".mobile__sort"), mobileFilterContainer = document.querySelector(".container__mobilefilter"),
    mobileNavSort = document.querySelector(".filter__item-popular"), mobileNavFilter = document.querySelector(".filter__item-filter"),
    mobilePopupFilter = document.querySelector(".mobile__filter")
if (mobileFilterContainer != undefined) {
    mobileNavSort.addEventListener("click", () => {
        mobileFilterContainer.classList.remove("hidden")
        mobilePopupSort.classList.remove("hidden")
        body.style.overflow = 'hidden'
    })

    let mobileBrandContainer = document.querySelector(".mobile__popup-brandcontainer"),  mobileBrands = document.querySelectorAll(".mobile__popup-brand")
    mobileNavFilter.addEventListener("click", () => {
        mobileFilterContainer.classList.remove("hidden")
        mobilePopupFilter.classList.remove("hidden")
        body.style.overflow = 'hidden'
        // console.log(mobileBrandContainer.getBoundingClientRect().bottom)
        for( let i = 0; i<mobileBrands.length; i++){
            // console.log(mobileBrands[i].getBoundingClientRect().top)
            if(mobileBrands[i].getBoundingClientRect().top > mobileBrandContainer.getBoundingClientRect().bottom){
                mobileBrands[i].classList.add("hidden")
            }
        }
    })
    mobileBrands.forEach(el=>{
        el.addEventListener("click", ()=>{
            el.classList.contains("mobile__popup-brandactive") ?  el.classList.remove("mobile__popup-brandactive") :  el.classList.add("mobile__popup-brandactive")
        })
    })
    let mobileBrandMore = document.querySelector(".mobile__popup-brandmore")
    mobileBrandMore.addEventListener("click", ()=>{
        if(mobileBrandContainer.classList.contains("wide-brands")){
            mobileBrandContainer.style.height = "92px"
            mobileBrandContainer.classList.remove("wide-brands")
            for( let i = 0; i<mobileBrands.length; i++){
                // console.log(mobileBrands[i].getBoundingClientRect().top)
                if(mobileBrands[i].getBoundingClientRect().top > mobileBrandContainer.getBoundingClientRect().bottom){
                    mobileBrands[i].classList.add("hidden")
                }
            }
        }
        else{
            mobileBrandContainer.style.height = "auto"
            mobileBrandContainer.classList.add("wide-brands")
            for( let i = 0; i<mobileBrands.length; i++){
                // console.log(mobileBrands[i].getBoundingClientRect().top)
                mobileBrands[i].classList.remove("hidden")
            }
        }

    })

    let mobileSortTypes = document.querySelectorAll(".mobile__popup-item"), mobileNavSortType = document.querySelector(".filter__item-popular p")

    mobileSortTypes.forEach(el => {
        el.addEventListener("click", () => {
            mobileNavSortType.innerHTML = el.innerHTML
            for (let i = 0; i < mobileSortTypes.length; i++) {
                mobileSortTypes[i].classList.contains("mobile__popup-active") ? mobileSortTypes[i].classList.remove("mobile__popup-active") : null
            }
            el.classList.add("mobile__popup-active")
        })
    });

    let mobilePopupClose = document.querySelectorAll(".mobile__popup-close")
    mobilePopupClose.forEach(el=>{
        el.addEventListener("click", () => {
            mobileFilterContainer.classList.add("hidden")
            mobilePopupSort.classList.contains("hidden") ? null : mobilePopupSort.classList.add("hidden")
            mobilePopupFilter.classList.contains("hidden") ? null : mobilePopupFilter.classList.add("hidden")
            body.style.overflow = 'auto'
        })
    })


    let mobileMultiply = document.querySelectorAll(".mobile__popup-multiplyitem")
    mobileMultiply.forEach(el=>{
        el.addEventListener("click", ()=>{
            el.classList.contains("mobile__popup-active") ? el.classList.remove("mobile__popup-active") : el.classList.add("mobile__popup-active")
        })
    })

    let mobileReset = document.querySelector(".mobile__popup-reset")
    mobileReset.addEventListener("click", ()=>{
        console.log("asdaszxc")
        mobileMultiply.forEach(ael=>{
            ael.classList.contains("mobile__popup-active") ? ael.classList.remove("mobile__popup-active") : null
        })
        mobileBrands.forEach(el=>{
            el.classList.contains("mobile__popup-brandactive") ?  el.classList.remove("mobile__popup-brandactive") :  null
        })
    })
}
