app.controller('transactionCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
   
        $scope.userid = $routeParams.id;
       
        $scope.url = 'api/get_transaction.php?userid='+$scope.userid+'';
            $http.get($scope.url).
                        success(function(data, status) {
                            $scope.transactionList = data;
                        })

        $scope.addAccount = function() {
            $location.path('addaccount'); 
        }

        $scope.navigateToTransaction = function() {
            $location.path('maketransaction'); 
        }

        $scope.navigateToDashboard = function() {
            $location.path('dashboard'); 
        }

        $scope.getTransaction = function() {
            $scope.url = 'api/get_transaction.php';
            $http.get($scope.url, {"userid": $scope.userid}).
                        success(function(data, status) {
                            alert(data);
                            $scope.transactionList = data;
                            $location.path('dashboard'); 
                        })
        }
    
});