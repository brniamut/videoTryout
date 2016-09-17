describe('grid component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('grid', function () {
      return {
        templateUrl: 'app/grid.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<grid></grid>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
