angular.module("lagou")
.controller("searchPageController",["$scope","searchPageService",function($scope,searchPageService){
    $scope.__click = true;
    var currentTab = "";
	searchPageService().success(function (res) {
       $scope.companyList = res.result;
	})
	 $scope.skip = function (company) {
         $scope.currentCompany.data = company;
     }
     $scope.changeImg = function ($event,current) {
        // 点击标签
        var target = angular.element($event.target).parent().parent();
        // 容器盒子
         var wrap = angular.element($event.target).parent().parent().parent().next(".areaWrap");
        if(currentTab == current){
            $scope.__click = true;
            target.parent().children().removeClass('skipactive');
            target.removeClass('skipactive');
            currentTab="";
        }else{
            $scope.__click = false;
            target.parent().children().removeClass('skipactive');
            target.addClass('skipactive');
            currentTab = current;
        }
     	
     }

}])