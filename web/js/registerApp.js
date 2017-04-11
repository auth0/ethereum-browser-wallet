/** 
* The MIT License (MIT) 
*  
* Copyright (c) 2016 Auth0, Inc. <support@auth0.com> (http://auth0.com) 
*  
* Permission is hereby granted, free of charge, to any person obtaining a copy 
* of this software and associated documentation files (the "Software"), to deal 
* in the Software without restriction, including without limitation the rights 
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
* copies of the Software, and to permit persons to whom the Software is 
* furnished to do so, subject to the following conditions: 
*  
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software. 
*  
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
* SOFTWARE. 
*/
angular.module('InformationApp', [])
.controller('informationCtrl', function($scope, $http, $location) {
	
	
	var abi=[{"constant":false,"inputs":[{"name":"secondary","type":"address"}],"name":"mapAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"secondaryInUse","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"primaryToSecondary","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"primary","type":"address"},{"indexed":false,"name":"secondary","type":"address"}],"name":"AddressMapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"uint256"},{"indexed":false,"name":"sender","type":"address"}],"name":"Error","type":"event"}];
	
	$scope.register = function(){
		console.log(document.getElementById('secondaryAddress').value)
		web3.eth.contract(abi).at("0x1b250ab38567c7f02b9895fbb7b06d4baf4072ff").mapAddress(document.getElementById('secondaryAddress').value, {
			from: web3.eth.accounts[0]
		}, function (error, result) {
			if (!error) {
				console.log(result)
			} else {
				console.error(error);
			}
		})
	}
});