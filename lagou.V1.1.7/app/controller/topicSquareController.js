angular.module("lagou")
.controller('topicSquareController',['$scope','topicSquareService',function($scope,topicSquareService){
	// 获取数据
	topicSquareService().success(function(res){
		$scope.proList = res;

		// 初始化：页面加载时选中“全部”
		$scope.bg = [];//设为数组
		$scope.bg[1] = 'current';

		// 点击导航选项，改变样式，并获取相应数据
		$scope.isCurrent = function (index){
			// 1.改变样式
			$scope.bg = [];//设为数组
			$scope.bg[index] = 'current';

			// // 获取当前点击内的文字
			var arr = ['全部','公司','城市','职位','行业','职业话题','产品'] ;

			// 获取当前点击内的文字
			 $scope.current = arr[index-1];
		}

		//点击"+"，出现隐藏的div
		$scope.isShow = false;
		  $scope.add = function($event){
		  	console.log($scope.isShow );
		 	$scope.isShow = !$scope.isShow;
		  }

		  //点击"×"，隐藏的div
		$scope.isShow = false;
		$scope.close = function($event){
		 	$scope.isShow = false;
		}
	})

}])












