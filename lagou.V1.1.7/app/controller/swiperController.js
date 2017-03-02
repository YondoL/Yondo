angular.module("lagou")
.controller("swiperController",["$scope","swiperService","$timeout",function ($scope,swiperService,$timeout) {
	swiperService().success(function (res) {
        	$scope.bannerImg = res;
        	$timeout(function () {
	               var mySwiper = new Swiper('.swiper-container',{
				        autoplay: 4000,//自动滑动时间间隔 毫秒为单位
						initialSlide : 0,  //初始时显示第几页 下标 0 开始
						speed : 300,   //每一次滑动的时间
						pagination : '.swiper-pagination',//设置滑块的classname
						paginationClickable :true , //滑块的点击事
						autoplayDisableOnInteraction : false,  //每次操作后是否继续执行轮播
					    loop:true,
					    paginationBulletRender: function (index, className) {
					    	className = 'myclass ' + className ;
						  	return '<div class="' + className + '">'  + '</div>';
						},
						// paginationType : 'custom'
		         })
        	},100)
        	
    })
	
}])