angular.module("lagou")
.controller("position_invite",["$scope",function($scope){
	$scope.main = [{name:'待处理',status:true},{name:'已投递',status:false},{name:'不感兴趣',status:false}]
	var main = $scope.main;
	$scope.toggle = function(item){
		for(ite in main){
			main[ite].status = false;
		}
		item.status = !item.status
	}
}])