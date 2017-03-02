angular.module("lagou")
.controller('smallTopicSquareController',['$scope','topicSquareService',function($scope,topicSquareService){
	// 获取数据
	topicSquareService().success(function(res){
		// 判断点击的是什么，获取相应数据
		if($scope.current == "全部"){
			$scope.proList = res;
		}
		if($scope.current == "公司"){
			var arr = [];
			for(var i=0; i<res.length; i++){	
				var str= res[i].title;
				// 变量数据，挑选出所有公司
				if(str.indexOf($scope.current)!=-1){
					arr.push(res[i]);
				}	
			}
			$scope.proList = arr;
		}

		// 点击"关注"，将数据存储在全局中，并改变样式
		$scope.addFocus = function (item) {
			var state = false;// 定义状态位,
			// 如果商品已经关注，则不再可点击
			for(var i = 0;i<$scope.result.length;i++){
				if(item == $scope.result[i]){
					state = true;//说明已经关注
				}
			}
			// 如果值没有改变则存储进去
			if(!state){
				// 点击关注后存储在全局变量中
				$scope.result.push(item);
				item.hasConcerned = true;
			}

		}

		//获取已点击关注的商品，遍历
		for(var i=0;i<$scope.result;i++){
			var id = $scope.result[i].id;
			// 遍历dom找出相同id商品
			for(var i=0;i<res.length;i++){
				if(res[i].id == id){

				}
			}
		}
	})

}])
