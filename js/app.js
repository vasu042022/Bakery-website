console.log('hello');
var menubtn = document.querySelector("#menu");
var menuList=document.querySelector("#menu-mob")
var menubgoverlay = document.querySelector(".menu-bg-overlay");
// var menu = document.querySelector("nav ul");
var menuBgLayer= document.querySelector(".menu-bg-layer");

menubtn.addEventListener("click", function () {
    menuList.classList.toggle("open-menu");
    menubgoverlay.classList.toggle("show-overlay");
    console.log(menubgoverlay)
});

menubgoverlay.addEventListener("click", function(){
    menubgoverlay.classList.remove("show-overlay");
    menuList.classList.toggle("open-menu");
})

document.addEventListener(
    "scroll",
    function(event){
        // console.clear();
        // console.log(window.scrollY);
        if(window.scrollY >=64){
            document.body.classList.add("stick-menu");
        }else{
            document.body.classList.remove("stick-menu");
        }
    }

)



var items =document.querySelectorAll("#menu-btns li");
var boxes = document.querySelectorAll(".box");

for(item of items){
    item.addEventListener(
        "click",
        function(event){
            var currentActive = document.querySelector(".active");
            currentActive.classList.remove("active");
            
            var currentOpen =document.querySelector(".open");
            currentOpen.classList.remove("open");

            var index = event.target.dataset.index;
            boxes[index].classList.add("open");

            event.target.classList.add("active");
        }
    );
}

// ---------------------------------------------------------------------------------------------------

$('.testi-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
