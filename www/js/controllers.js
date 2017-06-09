angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('SignUpCtrl', function($scope, $http, $state, $rootScope){

  $scope.loginData = {};

  $scope.doLogin = function(){
    var userName = $scope.loginData.name;
    var password = $scope.loginData.password;
    var year = $scope.loginData.year;
    var fac = $scope.loginData.selectfac;
    var tec =  $scope.loginData.teacher;
    var email = $scope.loginData.email;

   $http.post('http://localhost:3100/users', {

   email : email,
	password : password,
	year : year,
	faculty : fac,
	UserName : userName,
	tecOrStudent :tec

    }).then(successCallBack, errorCallBack);

    function successCallBack(resoponse){      
      console.log("Login Success");
      $rootScope.loggedInData = resoponse.data;
      console.log(resoponse.data);
      $state.go('login');

    }

    function errorCallBack(data){
      console.log("falier callback");
    }

/*console.log("Login Success");
      $rootScope.loggedInData =data;
      $state.go('home');*/
    console.log('UserName: ' + userName + ' PAssword: ' + password + 'UserName: ' + year + 'UserName: ' + tec);
  }
})
.controller('LoginCtrl', function($scope, $http, $state, $rootScope){

  $scope.userData = {};

  $scope.doSignIn = function(){
    var loguserName = $scope.userData.UserName;
    var logpassword = $scope.userData.Password;
 

   $http.put('http://localhost:3100/login/', {

   "userPassword": logpassword,
   "id" : loguserName

    }).then(successCallBack, errorCallBack);

    function successCallBack(resoponse){      
      console.log("Login Success");
      $rootScope.loggedInData = resoponse.data;
      console.log(resoponse.data);
      $state.go('app.home');

    }

    function errorCallBack(data){
      console.log("falier callback");
    }

/*console.log("Login Success");
      $rootScope.loggedInData =data;
      $state.go('home');*/
    console.log('UserName: ' + loguserName + ' PAssword: ' + logpassword );
  }
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
