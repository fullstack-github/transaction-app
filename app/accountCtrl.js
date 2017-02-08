app.controller('accountCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
       
        $scope.url = 'api/get_account.php';
            $http.get($scope.url).
                        success(function(data, status) {
                            $scope.accountList = data;
                        })

        $scope.addAccount = function() {
            $location.path('addaccount'); 
        }

        $scope.viewTransaction = function(id) {
            $location.path('transaction/'+id+''); 
        }

        $scope.navigateToTransaction = function() {
            $location.path('maketransaction'); 
        }
    
});