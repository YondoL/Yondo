angular.module("lagou")
.controller("askQuestionController",["$scope","askQuestionService",function($scope,askQuestionService){
     askQuestionService().success(function (res) {
     	// 获取商品列表里的数据
          
     })
    
}])