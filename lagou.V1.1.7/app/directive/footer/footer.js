angular.module("lagou")
.directive("myFooter",function(){
    return{
        controller:"footerController",
        templateUrl:"app/directive/footer/footer.html",
        css:[{
        	href: "public/css/footer.css",
            persist: true
           }]
    }
})
