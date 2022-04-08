// slider code start

const sliderItem = document.querySelectorAll(".slider-item");
const arrs = document.querySelectorAll(".arr");
const indicators = document.querySelectorAll(".indicator>div")
let index = 1;
let time = 4600; // how much time later it will slide
let timeoutAll = [];

let interval = setInterval(() => {
    startSlider()
}, time);

function startSlider(){
    let setTime = setTimeout(() => {
        sliderItem.forEach((item,ind)=>{
            if(ind != index){
                item.className = "slider-item d-none";
            }
        })
        sliderItem[index].className = "slider-item";
        indicators.forEach((indi)=>{
            indi.className = "";
        });
        indicators[index].className = "active"

        if(index + 1 == sliderItem.length){
            index = 0;
        }else{
            index = index + 1
        }
    }, time);

    timeoutAll.push(setTime)
}
startSlider();

function againSlider(){
    sliderItem.forEach((item,ind)=>{
        if(ind != index){
            item.className = "slider-item d-none";
        }
    })
    sliderItem[index].className = "slider-item";
    indicators.forEach((indi)=>{
        indi.className = "";
    });
    indicators[index].className = "active";
    if(index + 1 == sliderItem.length){
        index = 0;
    }else{
        index = index + 1
    }
}

arrs.forEach((arr)=>{
    arr.addEventListener("click",(e)=>{
        timeoutAll.forEach((setTime)=>{
            clearTimeout(setTime)
        });
    
        clearInterval(interval)

        if(e.target.classList.contains("right")){
            againSlider();
            restartSlide()
        }else{
            let curIndex = index - 1;

            if(curIndex == 0){
                index = sliderItem.length - 1;
            }else{
                if(curIndex == -1){
                    index = sliderItem.length - 2;
                }else{
                    index = curIndex - 1;
                }
            }
            console.log(index);
            againSlider();
            restartSlide()
        }
    });
});

indicators.forEach((indi)=>{
    indi.addEventListener("click",(e)=>{
        const slideNum = parseInt(e.target.getAttribute("data-slide"));
        timeoutAll.forEach((setTime)=>{
            clearTimeout(setTime)
        });
    
        clearInterval(interval)
        index = slideNum;
        againSlider();
        restartSlide()
    });
})

function restartSlide(){
    startSlider();

    interval = setInterval(() => {
        startSlider()
    }, time);
}

// slider code end 