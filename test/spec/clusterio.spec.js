describe('clusterio.kmeans', function() {
    it('should return clusters as expected', function() {
        var colors = [
            [20, 20, 80],
            [22, 22, 90],
            [250, 255, 253],
            [0, 30, 70],
            [200, 0, 23],
            [100, 54, 100],
            [255, 13, 8]
        ];
        var clusters = clusterio.kmeans(colors, 3);
        var expected = [
            [[200, 0, 23], [255, 13, 8]],
            [[20, 20, 80], [22, 22, 90], [0, 30, 70], [100, 54, 100]],
            [[250, 255, 253]]
        ];
        // console.log(clusters.sort());
        // console.log(expected);
        expect(clusters.sort()).toEqual(expected.sort());
    });
});