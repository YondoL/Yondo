angular.module("lagou")
.service("speechMainService",["$http",function ($http) {
	 return speechService = function (){
		return $http.get("data/speech.json");
	}
}])