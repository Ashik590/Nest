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

// Filter mobile menu

const mobileFilter = document.querySelector(".mobile-filter");
const filter_btn = document.querySelector(".filter_show");

if(filter_btn){
    filter_btn.addEventListener("click",()=>{
        mobileFilter.classList.remove("lefted");
        overlay.classList.remove("d-none");
    });
}

overlay.addEventListener("click",()=>{
    mobileFilter.classList.add("lefted")
});

// Rating detail

const show_detail_rating = document.querySelectorAll(".show_detail_rating");

show_detail_rating.forEach((show_detail)=>{
    show_detail.addEventListener("mouseenter",()=>{
        const detail = show_detail.lastElementChild;

        let x = detail.getBoundingClientRect().left; 
        let y = detail.getBoundingClientRect().top; 
        let width = parseInt(getComputedStyle(detail).width) + 20;
        let height = parseInt(getComputedStyle(detail).height) + 20;

        if(innerWidth - width < x){
            let extraLeft = x - (innerWidth - width);
            console.log(extraLeft);
            detail.style.left = `-${extraLeft}px`
        }

        if(innerHeight - height < y){
            let extraTop = y - (innerHeight - height);
            console.log(extraTop);
            detail.style.top = `-${extraTop}px`
        }

        console.log(detail.getBoundingClientRect().top);
    });

    show_detail.addEventListener("mouseleave",()=>{
        const detail = show_detail.lastElementChild;
        detail.style.left = "0px";
        detail.style.top = "0px";
    })
})
