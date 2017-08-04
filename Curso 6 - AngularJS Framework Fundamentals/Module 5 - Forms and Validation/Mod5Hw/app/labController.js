app.controller('labController', [
    '$scope', 'registration',
    function ($scope, registration) {
        $scope.reset = reset;
        $scope.submit = submit;

        reset();

        function submit(model) {
            registration.submit(model).$promise
                .then(function (response) {
                    alert('success');
                    $scope.isVisible = ! $scope.isVisible;
                    $scope.notVisible = !$scope.notVisible;
                    //$scope.alert = $scope.model.username;
                    $scope.model = {};
                },
                function (response) {
                    alert('error');
                });
        }

        function reset() {
            $scope.model = {};
        }
    }
]);