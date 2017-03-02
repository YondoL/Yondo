angular.module("lagou")
.service("speechSiftService",["$http",function ($http) {
	 return speechSiftService = function (){
		return $http.get("data/speech.json");
	}
}])