/**
 * User controller
*/

sampleApp.controller('UserController', function($rootScope,$scope,sampleAppLib,$filter,UserFilterService,UserService,$stateParams) {
    // Fetch data from resource
    // In real application application must fetch data using GET method and for specific r
    userID = $stateParams.id;
    if(userID){
        UserService.query().$promise.then(function(userListResponse) {
            // Use of angularJS filter functionality to get specific record            
            var dataSet = UserFilterService.getUserData( userListResponse , {id:parseInt(userID)},true);
            $scope.userDataSet = dataSet[0];
            $scope.recordFound = true;            
            if(typeof $scope.userDataSet == 'undefined'){
                $scope.recordFound = false;
            }
        });
    }
});
