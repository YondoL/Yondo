angular.module("lagou", ["ui.router", "ngAnimate", "angularCSS"])
    .config(function($stateProvider, $urlRouterProvider) {
        // guo
        $urlRouterProvider.when("/searchPage", "/searchPage/all")
            // 刘云东添加二级默认路由
        $urlRouterProvider.when('/message/wode', '/message/wode/all')

        //liu二级路由
        $urlRouterProvider.when("/community", "/community/communityState")

        // 戴添加二级默认路由：言职-话题广场
        $urlRouterProvider.when("/topicSquare", "topicSquare/all")

        .otherwise("homePage"); //结束


        $stateProvider
        // 主页
            .state("homePage", {
                url: "/homePage",
                templateUrl: "view/homePage.html",
                controller: "homeController",
                css: ["public/css/homePage.css"]
            })
            // 消息
            .state("message", {
                url: "/message",
                templateUrl: "view/message.html",
                controller: "messageController",
                css: ["public/css/message.css"]
            })
            // 言职
            .state("speechHome", {
                url: "/speechHome",
                templateUrl: "view/speechHome.html",
                controller: "speechHomeController",
                css: [{
                    href: "public/css/swiper-3.3.1.min.css",
                    persist: true
                }, {
                    href: "public/css/speechHome.css"
                }]
            })
            // 我的
            .state("mine", {
                url: "/mine",
                templateUrl: "view/mine.html",
                controller: "mineController",
                css: ["public/css/mine.css"]
            })
            // 主页的的公司点进去的商品详情
            .state("jobDetails", {
                url: "/jobDetails",
                templateUrl: "view/jobDetails.html",
                controller: "jobDetailsController",
                css: ["public/css/jobDetails.css"]
            })
            // 热门搜索
            .state("hotSearch", {
                url: "/hotSearch",
                templateUrl: "view/hotSearch.html",
                controller: "hotSearchController",
                css: ["public/css/hotSearch.css"]
            })
            // 搜索页面
            .state("searchPage", {
                url: "/searchPage",
                templateUrl: "view/searchPage.html",
                controller: "searchPageController",
                css: ["public/css/searchPage.css"]
            })
            // 此下为刘云东添加的路由选择
            // 此下为消息页的跳转路由
            .state("resume", {
                url: "/message/wode",
                templateUrl: "view/resume_status.html",
                controller: "resume_status",
                css: ['public/css/resume_status.css']
            })
            .state("position_invite", {
                url: "/message/position_invite",
                templateUrl: 'view/position_invite.html',
                controller: 'position_invite',
                css: ['public/css/resume_status.css', 'public/css/position_invite.css']
            })
            .state('community_notice', {
                url: '/message/messages',
                templateUrl: 'view/community_notice.html',
                // controller:'community_notice',
                css: ['public/css/community_notice.css']
            })
            .state('whoReadResume', {
                url: '/message/readResume',
                templateUrl: 'view/whoReadResume.html',
                // controller:'whoReadResume',
                css: ['public/css/resume_status.css']
            })

        // 此下为消息下的二级路由
        .state('resume.all', {
                url: '/all',
                templateUrl: 'view/resume_status_all.html',
                // controller:'resume_status_all',
                css: ['public/css/resume_status.css']
            })
            .state('resume.checked', {
                url: '/checked',
                templateUrl: 'view/resume_status_checked.html',
                // controller:'resume_status_checked',
                css: ['public/css/resume_status.css']
            })
            .state('resume.wait', {
                url: '/wait',
                templateUrl: 'view/resume_status_wait.html',
                // controller:'resume_status_wait',
                css: ['public/css/resume_status.css']
            })
            .state('resume.face', {
                url: '/face',
                templateUrl: 'view/resume_status_face.html',
                // controller:'resume_status_face',
                css: ['public/css/resume_status.css']
            })
            .state('resume.no', {
                url: '/no',
                templateUrl: 'view/resume_status_no.html',
                // controller:'resume_status_no',
                css: ['public/css/resume_status.css']
            }) //刘云东添加结束


        //苗志龙添加的路由
        //言职主页
        .state("speechMain", {
                url: "/speechMain",
                templateUrl: "view/speechMain.html",
                controller: "speechMainController",
                css: [{
                    href: "public/css/swiper-3.3.1.min.css",
                    persist: true
                }, {
                    href: "public/css/speechMain.css"
                }]
            })
            //言职主页提问 askQuestion
            .state("askQuestion", {
                url: "/askQueuestion",
                templateUrl: "view/askQuestion.html",
                controller: "askQuestionController",
                css: ["public/css/askQuestion.css"]
            })
            //言职精选 speechSift
            .state("speechSift", {
                url: "/speechSift",
                templateUrl: "view/speechSift.html",
                controller: "speechSiftController",
                css: ["public/css/speechSift.css"]
            })
            //言职comment 板块 callback 模块 回答 speechCallbackAnswer 
            .state("speechCallbackAnswer", {
                url: "/speechCallbackAnswer",
                templateUrl: "view/speechCallbackAnswer.html",
                controller: "speechCallbackAnswerController",
                css: ["public/css/speechCallbackAnswer.css"]
            })

        // 戴莎莎跳转
        .state("topicSquare", {
            url: "/topicSquare",
            templateUrl: "view/topicSquare.html",
            controller: "topicSquareController",
            css: ["public/css/topicSquare.css"]
        })

        .state("myTopicSquare", {
            url: "/myTopicSquare",
            templateUrl: "view/myTopicSquare.html",
            controller: "myTopicSquareController",
            css: ["public/css/myTopicSquare.css"]
        })

        .state("topicSquare.all", {
                url: "/all",
                templateUrl: "view/all.html",
                controller: "smallTopicSquareController",
                css: ["public/css/topicSquare.css"]

            })
            .state("topicSquare.company", {
                url: "/company",
                templateUrl: "view/company.html",
                controller: "smallTopicSquareController",
                css: ["public/css/topicSquare.css"]
            })
            .state("setting", {
                url: "/setting",
                templateUrl: "view/setting.html",
                css: ["public/css/setting.css"]
            })
            //刘翔翔
            .state("community", {
                url: "/community",
                templateUrl: "view/community.html",
                controller: "communityController",
                css: ["public/css/community.css"]
            })
            // 点赞
            .state("community.communityLike", {
                url: "/communityLike",
                templateUrl: "view/communityLike.html",
                css: ["public/css/community.css"]
            })
            // //动态
            .state("community.communityState", {
                url: "/communityState",
                templateUrl: "view/communityState.html",
                css: ["public/css/community.css"]
            })
            .state("myCollection", {
                url: "/myCollection",
                templateUrl: "view/myCollection.html",
                css: ["public/css/myCollection.css"]
            })
            .state("myResume", {
                url: "/myResume",
                templateUrl: "view/myResume.html",
                css: ["public/css/myResume.css"]
            })
            // guo
            // searchPage 下的自路由 所有
            .state("searchPage.all", {
                url: "/all",
                templateUrl: "view/searchpage_all.html",
                controller: "searchpage_allController",
                css: ["public/css/searchPage.css", "public/css/searchpage_all.css"]
            })
            // 职位筛选
            .state("searchPage.position", {
                url: "/position",
                templateUrl: "view/filter.html",
                controller: "filterController",
                css: ["public/css/searchPage.css", "public/css/filter.css"]
            })
            // 公司筛选
            .state("searchPage.company", {
                url: "/company",
                templateUrl: "view/homeCompanySelect.html",
                controller: "homeCompanySelectController",
                css: ["public/css/searchPage.css", "public/css/homeCompanySelect.css"]
            })



    })