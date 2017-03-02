angular.module("lagou")
.controller("hotSearchController",["$scope","hotSearchService",function($scope,hotSearchService){
     // 获取数据
     hotSearchService().success(function (res) {
          $scope.searchData = res.result;
     })
     // 显示页面的切换
     $scope.isShow = true;
     $scope.keyup = function ($event) {
          if($event.target.value){
               $scope.isShow = false;
          }else{
               $scope.isShow = true;
          }
     }
     // 点击后保存到历史记录的数据里
     $scope.searchSkip = function (company) {
         $scope.currentCompany.data = company;
         var  positionName = company.positionName
         if(company){
            $scope.searchHistory[positionName]=company;
         }
     }
     // 清空历史记录
     $scope.clearHistory = function () {
        for (var key in $scope.searchHistory){
            delete $scope.searchHistory[key];
        }
     }
}])
.filter("nameSearch",function() {
      return function(input,val,name){
          // console.log(input,val,name)
          var reg = new RegExp(val);
          var output = [];
          angular.forEach(input,function(m,n){
               // console.log(n)
               if(reg.test(m[name])){
                    // return true;
                    output.push(m)
               }
          })
          return output;
      }
});