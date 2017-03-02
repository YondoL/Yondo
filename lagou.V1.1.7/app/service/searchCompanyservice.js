angular.module("lagou")
.service("homeCompanySelectService",["$http",function ($http) {
	 return homeCompanySelectService = function (){
		return $http.get("data/homeCompanySelect.json");
	}
}])