angular.module("lagou")
	.controller('myTopicSquareController',['$scope',function($scope){
		// 获取result中存储的结果
		// 关注总数量
		$scope.focusNum = '(' +$scope.result.length + ')';

		// console.log($scope.result);
		// 关注的公司名字
		$scope.focusName ='';
		for(var i=0;i<$scope.result.length;i++){
			$scope.focusName += $scope.result[i].title + '   ';
		}
		// 获取关注的公司，动态添加到dom中
		$scope.proList = $scope.result;
		// console.log($scope.proList);

}])












