var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster']);

app.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/login', {
            title: 'Login',
            templateUrl: 'partials/login.html',
            controller: 'authCtrl'
        })
            .when('/addaccount', {
                title: 'Addaccount',
                templateUrl: 'partials/addaccount.html',
                controller: 'authCtrl'
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'partials/dashboard.html',
                controller: 'accountCtrl'
            })
            // .when('/accountList', {
            //     title: 'Dashboard',
            //     templateUrl: 'partials/accountlist.html',
            //     controller: 'accountCtrl'
            // })
            .when('/maketransaction', {
                title: 'Maketransaction',
                templateUrl: 'partials/maketransaction.html',
                controller: 'makeTransactionCtrl'
            })
            .when('/', {
                title: 'Dashboard',
                templateUrl: 'partials/dashboard.html',
                controller: 'accountCtrl',
                role: '0'
            })
            .when('/transaction/:id', {
                title: 'Transaction',
                templateUrl: 'partials/transaction.html',
                controller: 'transactionCtrl'
            })            
            .otherwise({
                redirectTo: '/dashboard'
            });
  }])