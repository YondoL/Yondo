angular.module("lagou")
.service("topicSquareService",["$http",function ($http) {
	 return topicSquareService = function (){
	 	// console.log(1);
		return $http.get("data/all_topic.json");
	}
}])

