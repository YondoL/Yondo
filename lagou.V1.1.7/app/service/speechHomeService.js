angular.module("lagou")
.service("speechHomeService",["$http",function ($http) {
	 return speechService = function (){
		return $http.get("data/speech.json");
	}
}])