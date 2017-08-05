angular.module('app').controller('sessionController', ['sessionService',
    function sessionController(sessionService) {

        var vm = this;

        vm.getServiceSession = function () {
            vm.model = {
                name: sessionService.get('name'),
                nickname: sessionService.get('nickname'),
                status: 'Retrieved by service on ' + new Date()
            };
        }
        vm.setServiceSession = function() {
            sessionService.save('name', vm.model.name);
            sessionService.save('nickname', vm.model.nickname);
            vm.getServiceSession();
        }
        vm.clearServiceSession = function() {
            sessionService.clear();
            vm.getServiceSession();
        }
    }
]);
/*angular.module('app').controller('sessionController', ['sessionService', 'sessionFactory', 
    function sessionController(sessionService, sessionFactory){
        var vm = this;
         var mySessionFactory = new sessionFactory();

         vm.getFactorySession = getFactorySession;
         vm.setFactorySession = setFactorySession;
         vm.clearFactorySession = clearFactorySession;

        vm.getFactorySession = function () {
             vm.model = {
                 name: mySessionFactory.get('name'),
                 nickname: mySessionFactory.get('nickname'),
                 status: 'Retrieved by Factory on ' + new Date()
             };
         }

         function setFactorySession() {
         }

         function clearFactorySession() {
         }
    }*/