angular.module("lagou")
.directive("mySwiper",function(){
    return{
        controller:"swiperController",
        templateUrl:"app/directive/swiper/swiper.html",
        css : [{
                href : "public/css/swiper-3.3.1.min.css",
                persist: true//保留CSS
                // preload: true,
            },{
            	href :"public/css/swipper.css"
            }
            ]
    }
})