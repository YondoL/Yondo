angular.module("lagou")
.controller("homeCompanySelectController",["$scope","homeCompanySelectService",function($scope,homeCompanySelectService){
    homeCompanySelectService().success(function (res) {
        //获得数据，放到两个遍历小组
            $scope.lists1 = res[0].main;
            $scope.lists2 = res[1].main; 
            // 封装点击函数
            $scope.toggle1 = function(item) {
                item.status = !item.status;
            }
            $scope.toggle2 = function(item) {
                if(!$scope.lists2[0].status){
                    item.status = !item.status
                    if(item.name == '不限' ){
                        for(var i=1;i<$scope.lists2.length;i++){
                            $scope.lists2[i].status = false;
                        }
                    }
                }else{
                    if(item.name == '不限'){
                         item.status = !item.status
                    }
                }
            }
    })
}])