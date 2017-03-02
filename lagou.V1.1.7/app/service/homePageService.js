angular.module("lagou")
.service("homePageService",["$http",function ($http) {
	 return homePageService = function (){
		return $http.get("data/unlimited.json");
	}
}])