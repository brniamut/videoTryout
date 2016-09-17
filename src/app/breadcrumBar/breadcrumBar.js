function breadcrumBarController() {

}

angular
  .module('app')
  .component('breadcrumBar', {
    templateUrl: 'app/breadcrumBar/breadcrumBar.html',
    controller: breadcrumBarController,
    bindings: {
      name: '@'
    }
  });

