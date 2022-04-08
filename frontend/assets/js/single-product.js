// header 

const shop_by_cate = document.getElementById("shop_by_cate");
const all_cate = document.getElementById("all_cate");
const category_search = document.getElementById("category_search");
const cate_input = category_search.querySelector("input");
const cate_li = category_search.querySelectorAll("li");
const shops = shop_by_cate.nextElementSibling;
const label_cate = all_cate.querySelector(".all_cate_label");

shop_by_cate.addEventListener("click",()=>{
    shops.classList.add("open")
})
shop_by_cate.addEventListener("mouseleave",()=>{
    let timeout = setTimeout(() => {
        shops.classList.remove("open");
    }, 0);
    
    shops.addEventListener("mouseenter",()=>{
        clearTimeout(timeout)
    })
});
shops.addEventListener("mouseleave",()=>{
    let timeout = setTimeout(() => {
        shops.classList.remove("open");
    }, 0);

    shop_by_cate.addEventListener("mouseenter",()=>{
        clearTimeout(timeout)
    })
})

all_cate.addEventListener("click",()=>{
    category_search.classList.remove("d-none")
})
category_search.addEventListener("mouseleave",()=>{
    let timeout = setTimeout(() => {
        category_search.classList.add("d-none")
    }, 0);

    all_cate.addEventListener("mouseenter",()=>{
        clearTimeout(timeout)
    })
})
all_cate.addEventListener("mouseleave",()=>{
    let timeout = setTimeout(() => {
        category_search.classList.add("d-none")
    }, 0);

    category_search.addEventListener("mouseenter",()=>{
        clearTimeout(timeout)
    })
})

cate_input.addEventListener("input",(e)=>{
    let val = e.target.value.toLocaleLowerCase();

    if(val){
        cate_li.forEach((li)=>{
            if(li.innerText.toLocaleLowerCase().includes(val)){
                li.classList.remove("d-none")
            }else{
                li.classList.add("d-none")
            }
        })
    }else{
        cate_li.forEach((li)=>{
            li.classList.remove("d-none")
        })
    }
});

cate_li.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        label_cate.innerText = e.target.innerText;
        category_search.classList.add("d-none")
    })
})

// mobile menu

const open_menu = document.getElementById("open_canvas");
const mobile_menu = document.querySelector(".mobile_menu");
const cross = document.querySelector(".cross");
const overlay = document.querySelector(".overlay");

open_menu.addEventListener("click",()=>{
    mobile_menu.classList.remove("lefted")
    overlay.classList.remove("d-none");
});

cross.addEventListener("click",()=>{
    mobile_menu.classList.add("lefted")
    overlay.classList.add("d-none");
});

overlay.addEventListener("click",()=>{
    mobile_menu.classList.add("lefted");
    overlay.classList.add("d-none");
})

// preloader

const preloader = document.querySelector(".preloader");

window.addEventListener("load",()=>{
    preloader.classList.add("fade");
    setTimeout(() => {
        preloader.classList.add("d-none")
    }, 800);
})

// product page start

// > product image zoom-in
const product_main_image = document.querySelector(".product_main_image");
const actualImg = product_main_image.querySelector(".actual");

// extra image for zoom
let view_zoom = document.createElement("img");
view_zoom.className = "w-100 view_zoom faded"
view_zoom.src = actualImg.src;
product_main_image.prepend(view_zoom)

product_main_image.addEventListener("mousemove",(e)=>{
    view_zoom.classList.remove("faded");
    let width = view_zoom.clientWidth / 2;
    let height = view_zoom.clientHeight / 2;

    let x = ((parseInt(e.target.clientWidth / 2) - e.layerX) / e.target.clientWidth) * width;
    let y = ((parseInt(e.target.clientHeight / 2) - e.layerY) / e.target.clientHeight) * height;

    view_zoom.style.transform = `scale(2) translate(${x}px,${y}px)`;
})

product_main_image.addEventListener("mouseleave",()=>{
    view_zoom.classList.add("faded")
})

// >  image slider

const slideDiv = document.querySelector(".product_slide .div");
const leftArr = document.querySelector(".left_12");
const rightArr = document.querySelector(".right_12");
const slideImgs = document.querySelectorAll(".product_slide img");
let activeNum = 1;
let width = 107;

leftArr.addEventListener("click",()=>{
    if(activeNum == 1){
        activeNum = slideImgs.length;
    }else{
        activeNum = activeNum - 1;
    }

    slideImgs.forEach((img)=>{
        img.classList.remove("active");
    })
    slideImgs[activeNum - 1].classList.add("active");

    slideDiv.scrollLeft = (activeNum - 1) * width;
    changeImage()
})

rightArr.addEventListener("click",()=>{
    if(activeNum == slideImgs.length){
        activeNum = 1;
    }else{
        activeNum = activeNum + 1;
    }

    slideImgs.forEach((img)=>{
        img.classList.remove("active");
    })
    slideImgs[activeNum - 1].classList.add("active");

    slideDiv.scrollLeft = (activeNum - 1) * width;
    changeImage()
});

slideImgs.forEach((img,ind)=>{
    img.addEventListener("click",(e)=>{
        let num = e.target.getAttribute("data-number");

        activeNum = ind + 1;
        slideImgs.forEach((img)=>{
            img.classList.remove("active");
        })
        slideImgs[activeNum - 1].classList.add("active");
        slideDiv.scrollLeft = (activeNum - 1) * width;
        changeImage()
    })
})

function changeImage(){
    actualImg.src = slideImgs[activeNum - 1].src;
    view_zoom.src = slideImgs[activeNum - 1].src
}

// > Product cart number
const cartNumber = document.querySelector(".product_cart .number");
const up = cartNumber.querySelector(".up");
const down = cartNumber.querySelector(".down");
const cartCount = cartNumber.querySelector("span.px-3");

up.addEventListener("click",()=>{
    let count = parseInt(cartCount.innerText);

    cartCount.innerText = count + 1;
})

down.addEventListener("click",()=>{
    let count = parseInt(cartCount.innerText);

    if(count - 1 < 1){
        cartCount.innerText = 1;
    }else{
        cartCount.innerText = count - 1;
    }
})

// > toggle (additional_infos)

const descInputs = document.querySelectorAll(".additional_infos > .d-flex input[type='radio']");
const descData = document.querySelectorAll(".additional_infos > .data");

descInputs.forEach((input)=>{
    input.addEventListener("input",(e)=>{
        let className = e.target.getAttribute("data-toggle");
        let elem = document.querySelector(`.additional_infos .${className}`);

        for (const div of descData) {
            div.classList.add("d-none");
        }

        elem.classList.remove("d-none")
    })
});

// > custom range input

const low = document.querySelector(".range .low");
const high = document.querySelector(".range .high");
const lowRange = document.querySelector("#low");
const highRange = document.querySelector("#high");
const low_price = document.querySelector(".fill_by_price .low_price");
const high_price = document.querySelector(".fill_by_price .high_price");
let highest_price_filter = 2000;

lowRange.addEventListener("input",(e)=>{
    let val = parseInt(e.target.value);
    let highest = parseInt(highRange.value);

    if(highest - val <= 0){
        val = highest;
        lowRange.value = val;
    }

    low_price.innerText = (highest_price_filter * val) / 100;
    low.style.width = `${val}%`;
})

highRange.addEventListener("input",(e)=>{
    let val = parseInt(e.target.value);
    let lowest = parseInt(lowRange.value);

    if(val - lowest <= 0){
        val = lowest;
        highRange.value = val;
    }

    high_price.innerText = (highest_price_filter * val) / 100;
    high.style.width = `${val}%`;
});

// Go top

const goTop = document.querySelector(".goTOp");

goTop.addEventListener("click",()=>{
    scrollTo(0,0)
})

// Some issue solves start

const producImage = document.querySelector(".product_images");
const productSlide = document.querySelector(".product_slide");
const Imgs = productSlide.querySelectorAll("img");
function productSliderWidth(){
    productSlide.style.width = producImage.clientWidth + "px";
    Imgs.forEach((img)=>{
        img.style.width = "100px"
    })
}
productSliderWidth();
window.addEventListener("resize",()=>{
    productSlide.style.width = "auto";
    Imgs.forEach((img)=>{
        img.style.width = "0"
    });

    productSliderWidth()
})

// Some issue solves end
