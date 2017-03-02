angular.module("lagou")
.service("searchPageService",["$http",function ($http) {
	 return searchPageService = function (){
		return $http.get("data/unlimited.json");
	}
}])