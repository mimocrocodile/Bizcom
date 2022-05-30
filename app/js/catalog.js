let catalogMore = document.querySelectorAll(".cataloglist__filter-more")
let catalogSubtitle = document.querySelectorAll(".cataloglist__filter-subtitle")
// let catalogContainer = document.querySelector(".cataloglist__filter-container")

// for(let i = 0; i<catalogContainer.children.length; i++){
//     i >= 5 ? catalogContainer.children[i].classList.add("hidden") : null
// }
catalogSubtitle.forEach(element=>{
    element.addEventListener("click", ()=>{
        let catalogMainContainer = element.parentElement.querySelector(".cataloglist__filter-maincontainer")
        catalogMainContainer.classList.contains("hidden") ?catalogMainContainer.classList.remove("hidden")  : catalogMainContainer.classList.add("hidden")
    })
})

catalogMore.forEach(element=>{
    element.addEventListener("click", ()=>{
        let catalogContainer = element.parentElement.querySelector(".cataloglist__filter-container")
        hideFilter(catalogContainer)
    })
})


function hideFilter(item){
    console.log(item.children[item.children.length-1])
    if(item.children[item.children.length-1].classList.contains("hidden")){
        for(let i = 0; i<item.children.length; i++){
           item.children[i].classList.remove("hidden")
        }
    }
    else{
        for(let i = 0; i<item.children.length; i++){
            i >= 5 ? item.children[i].classList.add("hidden") : null
        }
    }
}


let allInputs = document.querySelectorAll(".cataloglist__filter-input input"), allLabels = document.querySelectorAll(".cataloglist__filter-input label")
let allRadioInputs = document.querySelectorAll(".cataloglist__filter-radio input"), allRadioLabels = document.querySelectorAll(".cataloglist__filter-radio label")
for(let i = 0; i<allInputs.length; i++){
    allInputs[i].id = "filter-brand"+i
    allLabels[i].htmlFor = "filter-brand"+i
}
for(let i = 0; i<allRadioInputs.length; i++){
    allRadioInputs[i].id = "filter-color"+i
    allRadioLabels[i].htmlFor = "filter-color"+i
    allRadioLabels[i].id = "label-color"+i
}

let sortType = document.querySelectorAll(".cataloglist__sort-type"), sortPicked = document.querySelector(".cataloglist__sort-picked")
let sortContainer = document.querySelector(".cataloglist__content-sort")
sortContainer.addEventListener("mouseover", ()=>{
    let extraSort = sortContainer.querySelector(".cataloglist__content-extrasort")
    extraSort.classList.remove("hidden")
})
sortContainer.addEventListener("mouseout", ()=>{
    let extraSort = sortContainer.querySelector(".cataloglist__content-extrasort")
    extraSort.classList.add("hidden")
})
sortType.forEach(el=>{
    el.addEventListener("click", ()=>{

        for(let i = 0; i< sortType.length; i++){
            sortType[i].classList.contains("cataloglist__content-extrapicked") ? sortType[i].classList.remove("cataloglist__content-extrapicked")  : null
        }
        sortPicked.innerHTML = el.innerHTML
        el.classList.add("cataloglist__content-extrapicked")
    })
})