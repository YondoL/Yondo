angular.module("lagou")
.service("hotSearchService",["$http",function ($http) {
	 return hotSearchService = function (){
		return $http.get("data/unlimited.json");
	}
}])