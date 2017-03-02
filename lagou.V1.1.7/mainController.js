angular.module("lagou")
.controller("mainController",["$scope",function ($scope) {
	// 跳转到公司招聘详情页面的数据交换
   $scope.currentCompany = {};
   // 搜索的历史记录
   $scope.searchHistory = {};
   // 搜索页面的跳转到那个页面的状态
   $scope.searchPageStatus = {};
   // 言职：话题广场存储全局变量
   $scope.result =[];
   // 跳转到 言职 comment 板块 callback 模块 回答 speechCallbackAnswer页面
   $scope.speechCallback={};
}])