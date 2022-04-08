// popupSearch logic

const popupSearchLi = document.querySelectorAll(".popupSearch li");
const popupSearchInput = document.querySelectorAll(".popupSearch input");

popupSearchInput.forEach((input)=>{
    input.addEventListener("input",()=>{
        let text = input.value.toLowerCase();
        let lis = input.nextElementSibling.children;

        for (let li of lis) {
            if(!li.innerText.toLowerCase().includes(text)){
                li.classList.add("d-none")
            }else{
                li.classList.remove("d-none")
            }
        }
    })
})

popupSearchLi.forEach((li)=>{
    li.addEventListener("click",()=>{
        let input = li.parentElement.previousElementSibling;
        let category = li.innerText;
        let parent = li.parentElement.parentElement;
        let div = parent.parentElement.querySelector(".div");

        input.value = ""
        for (let siblingLi of popupSearchLi) {
            siblingLi.className = ""
        }
        li.className = "active"
        div.innerText = category;
        parent.classList.add("d-none");
    })
})

// some issue in layout
const orderlistparent = document.querySelector(".order-list-parent");
const orderlist = document.querySelector(".order-list");
function fixWidth(){
    orderlist.classList.add("d-none");
    let width = orderlistparent.clientWidth;
    
    console.log(width);
    orderlistparent.style.width = width + "px";
    orderlist.classList.remove("d-none")
}
fixWidth();

window.addEventListener("resize",()=>{
    orderlistparent.style.width = "auto";
    fixWidth()
})