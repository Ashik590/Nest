const modal_offer = document.querySelector("#offer_modal");
const stopPop = document.querySelector(".stopPop");

window.onload = ()=>{
    setTimeout(() => {
        modal_offer.classList.remove("d-none")
    }, 200);
}

stopPop.addEventListener("click",()=>{
    modal_offer.style.animation = "fade .35s linear";
    setTimeout(() => {
        modal_offer.classList.add("d-none")
    }, 300);
});

modal_offer.addEventListener("click",(e)=>{
    if(e.target == modal_offer){
        modal_offer.style.animation = "fade .35s linear";
        setTimeout(() => {
            modal_offer.classList.add("d-none")
        }, 300);
    }
})

// Countdown for offered modal

const day = modal_offer.querySelector(".day"),
hour = modal_offer.querySelector(".hour"),
minute = modal_offer.querySelector(".minute"),
second = modal_offer.querySelector(".second");

let remainingDay,remainingHour,remainingMin,remainingSecond;

function getRemainingTime(){
    let futureDate = new Date("1 january, 2030 00:00:00").getTime();
    let presentDate = new Date().getTime();
    let gap = futureDate - presentDate;

    remainingDay = gap / (1000 * 60 * 60 * 24);
    remainingHour = (remainingDay - Math.floor(remainingDay)) * 24;
    remainingMin = (remainingHour - Math.floor(remainingHour)) * 60;
    remainingSecond = Math.floor((remainingMin - Math.floor(remainingMin)) * 60); 
    
    // Put in on the offer modal
    day.innerText = Math.floor(remainingDay);
    hour.innerText = Math.floor(remainingHour);
    minute.innerText = Math.floor(remainingMin);
    second.innerText = Math.floor(remainingSecond);
}
getRemainingTime()
setInterval(()=>{
    getRemainingTime()
}, 1000);
