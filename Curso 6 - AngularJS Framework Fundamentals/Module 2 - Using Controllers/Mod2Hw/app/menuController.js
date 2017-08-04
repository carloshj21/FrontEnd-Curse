app.controller('menuController', [
    '$scope',
    function($scope){
        $scope.model = {title: 'Our Menu'};
        $scope.changeMainDish = function (item) {
            $scope.model.mainDish = item;
            if (item === 'Cheese Pizza'){
                $scope.model.Price = '$9.99';
            }
            if (item === 'Pepperoni Pizza'){
                $scope.model.Price = '$10.50';
            }
            if (item === 'Margherita Pizza'){
                $scope.model.Price = '$11.50';
            }
            if (item === 'BBQ Chicken Pizza'){
                $scope.model.Price = '$12.99';
            }
            if (item === 'Combo Pizza'){
                $scope.model.Price = '$13.99';
            }
        }
        /*$scope.$watch('model.mainDish', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });*/
    }
]);