angular.module("lagou")
.controller("searchpage_allController",["$scope","searchpage_allService",function($scope,searchpage_allService){
    searchpage_allService().success(function (res) {
         // 创建一个数组，将区名添加进其中，最终出现左边的菜单栏
            $scope.areaList1 = [];
            $scope.areaList1 = res
            // 定义一个变量，存放右边被选中的数据，为添加点击事件做存储
            var sele = res[0]
            // 
            $scope.areaList2 = res[0].data;
            $scope.isSeleked = function(item2){
                $scope.areaList2 = [];          
                for(var i=0;i<res.length;i++){
                    // 点击时变色，其他为黑色
                    res[i].status = false;
                    item2.status = true;
                    if(res[i].area == item2.area){
                        // 将所获数据添加进数组       
                        for(name in res[i].data){
                            // 将点击获得数据添加进数组
                            $scope.areaList2 = res[i].data  
                            // 将所有status置为false，重新为点击的li添加下边绿色的样式
                            for(var j=0;j<res[i].data.length;j++){
                                res[i].data[j].status = false;
                                // 让右边每个第一个亮起来
                                res[i].data[0].status = true;
                            }
                            sele = res[i];                              
                        }
                    }
                }               
            }
            // 封装右边点击加下划线的函数
            $scope.isSeleked2 = function(item){
                for(var j=0;j<sele.data.length;j++){
                    // 这里使所有选择都失去border
                    sele.data[j].status = false;
                }
                item.status = true;
            }
        })

}])