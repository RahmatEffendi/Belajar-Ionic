angular.module('starter.controllers', [])

/**
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
}) **/

.controller('AppCtrl', function($scope) {
})

.controller('SqKmtoSqMCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 1000000;
    }
  }
}) 

.controller('SqMtoSqKmCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width / 1000000;
    }
  }
}) 

.controller('SqKmtoSqMilCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 0.386102;
    }
  }
})

.controller('SqMiltoSqKmCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 2.58999;

    }
  }
})

/*
  Controller for Length converstion
**/

// KM to M
.controller('KmtoMCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 1000;
    }
  }
})

// M to KM
.controller('MtoKmCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 0.001;
    }
  }
})

// KM to Mile
.controller('KmtoMileCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 0.621371;
    }
  }
})

// Mile to Km
.controller('MiletoKmCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 1.60934;
    }
  }
})

// Km to Yard
.controller('KmtoYardCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 1093.61;

    }
  }
})

// Yard to Km
.controller('YardtoKmCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 0.0009144;
    }
  }
})

// Km to Foot
.controller('KmtoFootCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 3280.84;

    }
  }
})

// Foot to Km
.controller('FoottoKmCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 0.0003048;

    }
  }
})

// Km to Inch
.controller('KmtoInchCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 39370.1;

    }
  }
})

// Inch to Km
.controller('InchtoKmCtrl', function($scope) {
  $scope.format = {
    widthMeters: function () {
      return $scope.format.width * 0.0000254;

    }
  }
})
// End Length Convertion

.controller('ConvertsCtrl', function($scope) {
});
