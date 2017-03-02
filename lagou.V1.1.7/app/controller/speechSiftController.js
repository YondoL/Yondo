angular.module("lagou")
.controller("speechSiftController",["$scope","speechSiftService",function($scope,askQuestionService){
     speechSiftService().success(function (res) {
     	// 获取商品列表里的数据
        var res = res.speechMain[0].comment;
        // console.log(res);
        var arr =[];
        for (var i = res.length-1; i > 1; i--) {
        	arr.push(res[i]);
        }
        // console.log(arr)
        $scope.arr = arr;

        //跳转到speechCallbackAnswer 界面时 传参
        $scope.jump = function (ar) {
            $scope.speechCallback.data = ar;
            // console.log(ar);
        }
     })
    
}])