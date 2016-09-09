(function(){
  'use strict';
  angular.module("LunchCheck", [])
  
  .controller("LunchCheckController", LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.count = 0;
    $scope.output = ""
    $scope.fontcolour = ""
    $scope.bordercolour = ""
  
    $scope.styleOutput = function () {
    	if($scope.output == "Please enter data first")
    		$scope.fontcolour = {color:'red'};
    	else
    		$scope.fontcolour = {color:'green'};
    };
  
  
    $scope.styleTextbox = function () {
    	if($scope.output == "Please enter data first")
    		$scope.bordercolour = {'border-color':'red'};
    	else
    		$scope.bordercolour = {'border-color':'green'};
    };
  
    $scope.displayResult = function () {
    	var commaNum = CommaCount($scope.lunch);
    	if(commaNum > 0)
    	  $scope.count = commaNum + 1;
    	else
    	  $scope.count = commaNum;
    	if($scope.count < 1) 
    		$scope.output = "Please enter data first"
    	else if($scope.count < 4)
    		$scope.output = "Enjoy!"
    	else
    		$scope.output = "Too much!"
    };
  
    function CommaCount(str){
  	str = str.trim();
  	var count = 0;
  	var comma = ',';
  	for(var i = 0; i < str.length; i++) {
  		if(str[i] == comma)
  			count += 1;
  	  }
  	return count;
    };
  };
})();