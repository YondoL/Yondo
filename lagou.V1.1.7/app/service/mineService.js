angular.module("lagou")
.service("mineService",["$http",function ($http) {
	 return mineService = function (){
		return $http.get("data/unlimited.json");
	}
}])