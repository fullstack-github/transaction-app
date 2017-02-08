app.controller('makeTransactionCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
   
        $scope.userName = $rootScope.userName;

        $scope.url = 'api/getuser.php';
            $http.get($scope.url).
                        success(function(data, status) {
                            $scope.userList = data;
                        })
        $scope.addAccount = function() {
            $location.path('addaccount'); 
        }

        $scope.navigateToDashboard = function() {
            $location.path('dashboard'); 
        }

        $scope.makeTransaction = function(isValid) {
            $scope.userid = $rootScope.userId;
            $scope.url = 'api/maketransaction.php';
            if (isValid) {
                $http.post($scope.url, {"from": $scope.from, "to": $scope.to, "amount": $scope.amount}).
                        success(function(data, status) {
						if(data == "false"){
							alert("Balance not available for transaction");
						}
						else{
							$rootScope.balance = data.balance;
                            $location.path('dashboard'); 
						}
                            
                        })
            }else{
                
                  alert('Form is not valid');
            }

        }    
});