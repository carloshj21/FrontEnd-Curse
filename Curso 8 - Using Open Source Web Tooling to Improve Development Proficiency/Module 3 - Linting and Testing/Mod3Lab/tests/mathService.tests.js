describe('mathService', function () {

    it('add is defined', function () {
        expect(mathService.add).toBeDefined();
    });

    it('should add', function () {
        var first = 3;
        var second = 5;

        var expected = first + second;
        var actual = mathService.add(first, second);

        expect(expected).toBe(actual);
    });
});