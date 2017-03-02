angular.module("lagou")
.service("messageService",["$http",function ($http) {
	 return messageService = function (){
		return $http.get("data/unlimited.json");
	}
}])