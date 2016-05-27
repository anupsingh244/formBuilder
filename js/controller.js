(function() {
    'use strict';

    angular.module('myApp')
        .controller('formBuilderCtrl', formBuilderCtrl);
    	BasicExampleCtrl.$inject = ['$scope'];

    function formBuilderCtrl($scope) {
        $scope.tree1 = [{
            'id': 1,
            'title': 'Text',
            'type': 'text',
            'nodes': []
        }, {
            'id': 2,
            'title': 'Textarea',
            'type': 'textarea',
            'nodes': []
        }];

        $scope.tree2 = [{
            'id': 1,
            'title': 'Text',
            'type': 'text',
            'nodes': []
        }];

    }

}());
