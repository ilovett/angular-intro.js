var app = angular.module('myApp', ['angular-intro']);

app.controller('MyController', function ($scope) {

    $scope.CompletedEvent = function () {
        console.log("Completed Event called");
    };

    $scope.ExitEvent = function () {
        console.log("Exit Event called");
    };

    $scope.ChangeEvent = function (targetElement) {
        console.log("Change Event called");
        console.log(targetElement);
    };

    $scope.BeforeChangeEvent = function (targetElement) {
        console.log("Before Change Event called");
        console.log(targetElement);
    };

    $scope.AfterChangeEvent = function (targetElement) {
        console.log("After Change Event called");
        console.log(targetElement);
    };

    $scope.IntroOptions = {
        steps:[
        {
            element: document.querySelector('#step1'),
            intro: "This is the first tooltip."
        },
        {
            element: document.querySelectorAll('#step2')[0],
            intro: "<strong>You</strong> can also <em>include</em> HTML",
            position: 'right'
        },
        {
            element: '#step3',
            intro: 'More features, more fun.',
            position: 'left'
        },
        {
            element: '#step4',
            intro: "Another step.",
            position: 'bottom'
        },
        {
            element: '#step5',
            intro: 'Get it, use it.'
        }
        ],
        showStepNumbers: false,
        exitOnOverlayClick: true,
        exitOnEsc:true,
        nextLabel: '<strong>NEXT!</strong>',
        prevLabel: '<span style="color:green">Previous</span>',
        skipLabel: 'Exit',
        doneLabel: 'Thanks'
    };

    $scope.ShouldAutoStart = function() {
        return false;
    }

});

