angular.module("lagou")
.controller("filterController",["$scope",function($scope){
   $scope.click=function(event){
   	// console.log(event.target.style)//可以打印出来是个对象字面量，有颜色
   	// event.target.style.backgroundColor="#00b38a";
   	if(event.target.style.backgroundColor == "rgb(0, 179, 138)"){
   		event.target.style.backgroundColor = "rgb(255,255,255)"
   	}else{
   		event.target.style.backgroundColor = "rgb(0, 179, 138)"
   	}
   }
}])
