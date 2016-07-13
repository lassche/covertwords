"use strict";
var card_1 = require('./card');
var game_util_1 = require('../util/game-util');
var CardFactory;
(function (CardFactory) {
    var _words;
    var _sessionWords;
    var _sessionColors;
    function createDictionary() {
        return ['Ape', 'Animal', 'America', 'Adder', 'Anime', 'Argentina',
            'Book', 'Bear', 'Brown', 'Broke', 'Banner', 'Bridge', 'Bart', 'Bus', 'Barcelona', 'Brasil', 'Blue',
            'Car', 'Creek', 'Can', 'Carrot', 'Carolina', 'Comic', 'China',
            'Dublin', 'Doubt', 'Deer', 'Dragon',
            'Eating', 'Eternal',
            'Frown', 'France', 'Fake',
            'Geneva', 'Guitar',
            'Halibut', 'Hood',
            'Israel', 'Internet',
            'Jumping', 'Jar',
            'Kerosine', 'Knight',
            'Lamp', 'London',
            'Modern', 'Moscow', 'Mexican',
            'Nap', 'New York', 'Naive',
            'Oliver', 'Orange',
            'Purple', 'Paris', 'Prince',
            'Queen', 'Quaint',
            'Rome', 'Radical', 'Red',
            'Stoical', 'Song', 'Stone', 'Sushi', 'Sea',
            'Tremor', 'Television',
            'Ugly', 'Umbrella',
            'Vacine', 'Venice', 'Vietnam',
            'Weather', 'World', 'Wonder',
            'Xylophone', 'Xerox',
            'Yoghurt', 'Yellow',
            'Zone'
        ];
    }
    function createShuffledCardDeck(config, cardCount, seed) {
        game_util_1.GameUtil.setRandomSeed(seed);
        var sessionDictionary = createDictionary();
        var cards = new Array();
        var blackCardCount = 1;
        var whiteCardCount = 1 + cardCount - (config.getStartCardCount(0) + config.getStartCardCount(1) + blackCardCount);
        var wordSelectionFunction = function () {
            var rnd = game_util_1.GameUtil.randomIntFromInterval(0, sessionDictionary.length - 1);
            var result = sessionDictionary[rnd];
            sessionDictionary.splice(rnd, 1);
            return result;
        };
        cards = cards.concat(createCards(config.getStartCardCount(0), 0, card_1.CardType.Points, 'red', wordSelectionFunction));
        cards = cards.concat(createCards(config.getStartCardCount(1), 1, card_1.CardType.Points, 'blue', wordSelectionFunction));
        cards = cards.concat(createCards(1, -1, card_1.CardType.Loss, 'black', wordSelectionFunction));
        cards = cards.concat(createCards(whiteCardCount, -1, card_1.CardType.EndOfTurn, 'white', wordSelectionFunction));
        return game_util_1.GameUtil.shuffle(cards, game_util_1.GameUtil.nextRandom);
    }
    CardFactory.createShuffledCardDeck = createShuffledCardDeck;
    function createCards(count, team, type, color, wordFunction) {
        var result = [];
        for (var i = 0; i < count; ++i) {
            var card = new card_1.Card();
            card.type = type;
            card.team = team;
            card.color = color;
            card.word = wordFunction();
            card.isRevealed = false;
            result.push(card);
        }
        return result;
    }
})(CardFactory = exports.CardFactory || (exports.CardFactory = {}));
//# sourceMappingURL=card-factory.js.map