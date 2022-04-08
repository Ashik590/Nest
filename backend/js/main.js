// Night mode

const layout_mode = document.querySelector(".layout_mode");

layout_mode.addEventListener("click",()=>{
    document.body.classList.toggle("night")
})

// popup 

const pop_parents = document.querySelectorAll(".pop_parent");

pop_parents.forEach((pop_parent)=>{
    const div = pop_parent.querySelector(".div");
    const popup = pop_parent.querySelector(".popup");
    div.addEventListener("click",()=>{
        pop_parents.forEach((pop_prnt)=>{
            let child = pop_prnt.querySelector(".popup");
            if(child){
                child.classList.add("d-none")
            }
        })
        popup.classList.remove("d-none");
    });

    let time;
    pop_parent.addEventListener("mouseleave",()=>{
        time = setTimeout(() => {
            popup.classList.add("d-none")
        }, 300);
    })
    pop_parent.addEventListener("mouseenter",()=>{
        clearTimeout(time)
    })
})

// Offcanvas menu

const close_menu = document.querySelector(".close_menu");
const open_menus = document.querySelectorAll(".open_menu");
const showMenu = document.querySelector(".showd-menu");
const collapseMenu = document.querySelector(".collapsed-menu");

if(close_menu && collapseMenu && showMenu){
    close_menu.addEventListener("click",()=>{
        showMenu.classList.add("d-none");
        collapseMenu.classList.remove("d-none")
        document.body.classList.add("collapsed_");
    })
    open_menus.forEach((open_menu)=>{
        open_menu.addEventListener("click",()=>{
            collapseMenu.classList.add("d-none")
            showMenu.classList.remove("d-none")
            document.body.classList.remove("collapsed_");
        })
    })
    
    function fixResponse(){
        if(innerWidth <= 900){
            showMenu.classList.add("d-none")
        }else{
            showMenu.classList.remove("d-none")
        }
    }
    fixResponse();
    
    window.addEventListener("resize",fixResponse)
}

const openOverlay = document.querySelector(".openOverlay");
const overlay = document.querySelector(".overlay");

openOverlay.addEventListener("click",()=>{
    overlay.classList.remove("d-none")
})

overlay.addEventListener("click",()=>{
    showMenu.classList.add("d-none")
    overlay.classList.add("d-none")
})