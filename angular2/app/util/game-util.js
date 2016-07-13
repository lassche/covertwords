"use strict";
var GameUtil;
(function (GameUtil) {
    // random members
    var _seed = 12034382;
    var _z = 38392932;
    var _mask = 0xFFFFFFFF;
    // crc members
    var _crcTable = [];
    /**
     * Sets the random seed
     */
    function setRandomSeed(i) {
        _seed = i;
        _z = 38392932;
    }
    GameUtil.setRandomSeed = setRandomSeed;
    /**
     * @return a random value between 0 and 1
     */
    function nextRandom() {
        _z = (36969 * (_z & 65535) + (_z >> 16)) & _mask;
        _seed = (18000 * (_seed & 65535) + (_seed >> 16)) & _mask;
        var result = ((_z << 16) + _seed) & _mask;
        result /= 4294967296;
        return result + 0.5;
    }
    GameUtil.nextRandom = nextRandom;
    function nextRandomBoolean() {
        return this.nextRandom() > 0.5;
    }
    GameUtil.nextRandomBoolean = nextRandomBoolean;
    /**
     * Creates an array filled with the count items of the given value.
     * @return a non null array of type T
     */
    function createArray(count, value) {
        var result = [];
        for (var i = 0; i < count; ++i) {
            result.push(value);
        }
        return result;
    }
    GameUtil.createArray = createArray;
    /**
     * Returns a random int between min and max (inclusive)
     * @return a random number between min and max
     */
    function randomIntFromInterval(min, max) {
        var rnd = nextRandom();
        return Math.floor(rnd * (max - min + 1) + min);
    }
    GameUtil.randomIntFromInterval = randomIntFromInterval;
    function makeCRCTable() {
        var c;
        for (var n = 0; n < 256; n++) {
            c = n;
            for (var k = 0; k < 8; k++) {
                c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
            }
            _crcTable[n] = c;
        }
    }
    /**
     * Runs a crc function over a string and retuns the value
     */
    function crc32(str) {
        if (_crcTable == null || _crcTable.length == 0) {
            makeCRCTable();
        }
        var crc = 0 ^ (-1);
        for (var i = 0; i < str.length; i++) {
            crc = (crc >>> 8) ^ _crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
        }
        return (crc ^ (-1)) >>> 0;
    }
    GameUtil.crc32 = crc32;
    ;
    function assertTrue(value, message) {
        if (!value) {
            throw new Error("Assert failed " + message);
        }
    }
    GameUtil.assertTrue = assertTrue;
    function maxIndex(arr) {
        assertTrue(arr != null && arr.length > 0, "maxIndex: array is not valid.");
        var max = Number.MIN_SAFE_INTEGER;
        var index = -1;
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] > max) {
                max = arr[i];
                index = i;
            }
        }
        return max;
    }
    GameUtil.maxIndex = maxIndex;
    // Fisher - Yates shuffle
    function shuffle(array, random) {
        var rndFunction = random == null ? Math.random : random;
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(rndFunction() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    GameUtil.shuffle = shuffle;
})(GameUtil = exports.GameUtil || (exports.GameUtil = {}));
//# sourceMappingURL=game-util.js.map