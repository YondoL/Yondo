angular.module("lagou")
.controller("resume_status",["$scope",function($scope){
	$scope.main = [{name:'全部',status:true,hear:'.all'},{name:'被查看',status:false,hear:'.checked'},{name:'待沟通',status:false,hear:'.wait'},{name:'面试',status:false,hear:'.face'},{name:'不合适',status:false,hear:'.no'}]
	var main = $scope.main;
	$scope.toggle = function(item){
		for(ite in main){
			main[ite].status = false;
		}
		item.status = !item.status
	}
}])
