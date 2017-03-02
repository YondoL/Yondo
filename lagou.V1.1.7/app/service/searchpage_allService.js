angular.module("lagou")
.service("searchpage_allService",["$http",function ($http) {
	 return searchpage_allService = function (){
		return $http.get("data/homeAreaSelect.json");
	}
}])