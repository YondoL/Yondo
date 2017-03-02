angular.module("lagou")
.controller("speechHomeController",["$rootScope","$scope","speechHomeService","$timeout",function($rootScope,$scope,speechHomeService, $timeout){
     speechHomeService().success(function (res) {
        // 监听$rootScope 阻止页面跳转
        // $rootScope.$on("$stateChangeStart",function(event){
        //     if($scope.selected<3){
        //         event.preventDefault()
        //     }        
        // })
        
        // 获取商品列表里的数据
        // console.log(res);
        var arrs = [],n=0,
        res=res.speechHome;
        if (res.length) {
            // res/9取整 为j
        	var j = parseInt(res.length/9);
        	// console.log(j);
            //遍历j对res数组进行分组
	        for (var i = 0; i < j; i++) {
	        	var arr=[];

                var l=i*9,p=(i+1)*9;
                //每9个为一组遍历放入数组中
	        	for (var k = l; k < p; k++) {
	        		arr.push(res[k])
	        	}
	        	arrs.push(arr);
	        	// console.log(arrs)
	       	}
            //当有余数时 遍历 放入数组
	       	if (res.length%9>0) {
                var l=j*9;
                var arr=[];
	       		for (var h= l; h < res.length; h++) {
	       			arr.push(res[h])
	       		}
                arrs.push(arr);
	       	}
	    }
        $scope.arrs=arrs;
         //点击图片status状态 取反 为图片img 变换图片提供依据
        var num = 1;
        $scope.selected = 0; //selected 判断是否阻止页面跳转的参数
        $scope.go = "请至少选择三个话题";
        //当selected<3时 阻止页面跳转
        $scope._go = function(event){
            if($scope.selected<3){
                event.preventDefault()
            }
        }
        $scope.imgChange = function(ar){ 
            ar.status = !ar.status;
            //计算ar.status==false 的数量
            if (ar.status==false) {
                num++;
            }else{
                num--;
            }
           // console.log(num);
           // 当num大于3时，显示 "完成,进入社区" ,否则显示 "请至少选择三个话题"
           if (num>3) {
                $scope.selected = 3;
                $scope.go = "完成,进入社区"
           }else{
                $scope.go = "请至少选择三个话题"
           }       
        }

        
    }).then(function(){
        var mySwiper = new Swiper('.speechHome .swiper-container',{
                // 如果需要分页器
                observer:true,
                observeParents:true,
                pagination: '.swiper-pagination'
            }) 
    })
}])

        
       
           
   
