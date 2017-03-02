angular.module("lagou")
.controller("speechCallbackAnswerController",["$scope","speechCallbackAnswerService",function($scope,askQuestionService){
     speechCallbackAnswerService().success(function (res) {
     	//获取储存在主页面controller里面的数据
     	$scope.arr = $scope.speechCallback.data; 
     	// console.log($scope.arr);
     	
     })
    
}])