angular.module("lagou")
.controller("communityController",["$scope",function($scope){
	$scope.toggle = function($event){
		
		angular.element($event.target).parent().children().removeClass('classGreen');
			angular.element($event.target).addClass('classGreen');
	}
}])