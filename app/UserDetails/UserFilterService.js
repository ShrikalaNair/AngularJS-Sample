sampleApp.factory("UserFilterService", function($resource,$filter,$window,sampleAppLib) {
	return{	
			
		getUserData: function(list,expression,comparator){
           // Use of angularJS filter functionality to get specific record            
           	var userDataSet;           
            userDataSet = $filter("filter")( list ,expression,comparator);
            return userDataSet;
    		}

		};
	
});



