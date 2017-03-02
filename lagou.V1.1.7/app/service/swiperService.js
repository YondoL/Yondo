angular.module("lagou")
.service("swiperService",["$http",function ($http) {
	 return swiperService = function (){
		return $http.get("data/homePage.json");
	}
}])
