function videoController($stateParams) {
  var self = this;

  self.name = $stateParams.name;
  self.url = $stateParams.url;
  console.log(self.url);
}

angular
  .module('app')
  .component('videoPlayer', {
    templateUrl: 'app/components/video/video.html',
    controller: videoController
  });

