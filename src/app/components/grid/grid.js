function gridController(Players) {
  var self = this;
  self.data = [];

  Players.getData().then(playersLoaded, playersLoadedFailed);

  function playersLoaded(response) {
    self.data = response.data;
  }

  function playersLoadedFailed(error) {
    console.log('error: ', error);
  }
}

angular
  .module('app')
  .component('grid', {
    templateUrl: 'app/components/grid/grid.html',
    controller: gridController
  });

