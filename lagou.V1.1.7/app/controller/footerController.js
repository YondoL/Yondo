angular.module("lagou")
.controller("footerController",["$scope","$location",function ($scope,$location) {
		$scope.position = $location.path();
		if($scope.position == "/speechMain"){
			$scope.position = "/speechHome"
		}
		$scope.footerImg = {
			"/homePage" : {
				 true : "public/images/homePage/home_green.png",
				 false : "public/images/homePage/home_grey.png",
				 "isactive" : false
			},
			"/message" : {
				true : "public/images/homePage/message_green.png",
				false : "public/images/homePage/message_grey.png",
				"isactive" : false
			},
			"/speechHome" : {
				true : "public/images/homePage/say_green.png",
				false : "public/images/homePage/say_grey.png",
				"isactive" : false
			},
			"/mine" : {
				true : "public/images/homePage/smile_green.png",
				false : "public/images/homePage/smile_grey.png",
				"isactive" : false
			}
		};
	for(var x in $scope.footerImg){
		$scope.footerImg[x].isactive = false;
	}
	$scope.footerImg[$scope.position][$scope.footerImg[$scope.position].isactive = true]
}])