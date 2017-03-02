angular.module("lagou")
.service("askQuestionService",["$http",function ($http) {
	 return askQuestionService = function (){
		return $http.get("data/unlimited.json");
	}
}])