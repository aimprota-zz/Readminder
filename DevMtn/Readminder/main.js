'use strict';

angular.module('readminderApp')
	.controller('MainCtrl', function ($scope, $timeout) {

	var tabInfo = {};

	//Get tabs title and url
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
    	tabInfo.url   = arrayOfTabs[0].url; 
    	tabInfo.title = arrayOfTabs[0].title;
    	console.log("Active tab info (url, title): ", tabInfo.url, tabInfo.title);
  	});

	var linkData = []; 
	$scope.linkData = linkData;
		//make linkData equal to stored data so that the data is 
		//accessible by the ng-repeat
	var getCallback = function(data) {
				console.log('stored array', data.value);
				if (data.value) {
					for (var i = 0; i < data.value.length; i++) {
						var newData = 
						linkData[i] = data.value[i];
					};
					console.log('After get:', '$scope.linkData:', $scope.linkData);
				}
			};

	var get = function (callback) {
			chrome.storage.sync.get('value', callback);
		    };

	get(getCallback);
	console.log('$scope.linkData at the end', $scope.linkData);
		
	// $scope.addLinkClick = function() {
	// 		$scope.linkData[$scope.linkData.length] = tabInfo;
	// 			// for (i=0; i)
	// 		chrome.storage.sync.set({'value': $scope.linkData}, function (){
	// 			console.log('link saved');
	// 		});
	// 		// chrome.storage.sync.get('value', function(data){
	// 		// 	console.log('stored array', data.value);
	// 		// 	$scope.linkData = data.value;
	// 		// 	console.log('linkData:', $scope.linkData);
	// 		// });
	// 	};
});