function gridItemController(Player) {
  var self = this;

  Player.getData(self.playerId).then(playerDataLoaded, playerDataLoadedFailed);
  
  function playerDataLoaded(response) {
    self.data = response.data;
  }
  
  function playerDataLoadedFailed(error) {
    console.log('error: ', error);
  }
}

angular
  .module('app')
  .component('gridItem', {
    templateUrl: 'app/components/grid/gridItem/gridItem.html',
    controller: gridItemController,
    bindings: {
      playerId: '='
    }
  });

