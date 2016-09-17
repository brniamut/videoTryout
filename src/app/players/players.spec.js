describe('Players service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Players) {
    expect(Players.getData()).toEqual(3);
  }));
});
