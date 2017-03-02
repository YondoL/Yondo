angular.module("lagou")
.service("speechCallbackAnswerService",["$http",function ($http){
	 return speechCallbackAnswerService = function (){
		return $http.get("data/speech.json");
	}
}])