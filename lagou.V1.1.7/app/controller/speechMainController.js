angular.module("lagou")
.controller("speechMainController",["$scope","speechMainService","$timeout",function($scope,speechMainService, $timeout){
     speechMainService().success(function (res) {
          var res = res.speechMain[0];
          // console.log(res);
          $scope.sw = res.swiper;
          // console.log($scope.sw);
          var arr1=[],arr2=[],arr3=[];
          for (var i = 0; i < 3; i++) {
               arr1.push(res.comment[i]);
          }
          $scope.arr1 = arr1;
          for (var i = 3; i < 7; i++) {
               arr2.push(res.comment[i]);
          }
          // console.log(arr2);
          $scope.arr2 = arr2;
          for (var i = 7; i < res.comment.length; i++) {
               arr3.push(res.comment[i]);
          }
          $scope.arr3 = arr3;
          //console.log($scope.arr3);
          var att = res.swiper2
          // console.log(att);
          $scope.att = att;
          
          //跳转到speechCallbackAnswer 界面时 传参
          $scope.jump = function (ar) {
               $scope.speechCallback.data = ar;
               // console.log(ar);
          }
    }).then(function(){
          var mySwiper = new Swiper('.speechMain .banner .swiper-container',{
                    autoplay: 4000,//自动滑动时间间隔 毫秒为单位
                    speed : 300,   //每一次滑动的时间
                    pagination: '.swiper-pagination',
                    observer:true,
                    observeParents:true,
                    paginationClickable :true , //滑块的点击事
                    autoplayDisableOnInteraction : false,  //每次操作后是否继续执行轮播
                    loop:true
               }); 
          
    })
    
}])

        
       
           
   
