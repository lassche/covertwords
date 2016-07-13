import { Card, CardType } from './card';
import { Configuration } from './configuration';

import { GameUtil } from '../util/game-util';

export module CardFactory {
    
    var _words : string[];
    
    var _sessionWords : string[];
    var _sessionColors : number[];
        
    function createDictionary() : Array<string> {
        
          return [ 'Ape', 'Animal', 'America', 'Adder', 'Anime', 'Argentina',           
                    'Book', 'Bear', 'Brown', 'Broke', 'Banner', 'Bridge', 'Bart', 'Bus', 'Barcelona', 'Brasil', 'Blue',
                    'Car', 'Creek', 'Can', 'Carrot', 'Carolina', 'Comic', 'China',
                    'Dublin', 'Doubt', 'Deer', 'Dragon', 
                    'Eating', 'Eternal', 
                    'Frown',  'France', 'Fake',
                    'Geneva', 'Guitar',
                    'Halibut', 'Hood',
                    'Israel', 'Internet',
                    'Jumping', 'Jar',
                    'Kerosine', 'Knight',
                    'Lamp', 'London', 
                    'Modern',  'Moscow', 'Mexican',
                    'Nap', 'New York', 'Naive',
                    'Oliver', 'Orange',
                    'Purple', 'Paris', 'Prince', 
                    'Queen', 'Quaint',
                    'Rome',  'Radical', 'Red',
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
    
    export function createShuffledCardDeck( config : Configuration,  cardCount : number, seed : number  ) : Array<Card> {
        
        GameUtil.setRandomSeed( seed );
        
        var sessionDictionary = createDictionary();
    
        var cards = new Array<Card>();

        var blackCardCount = 1;
        var whiteCardCount = 1 + cardCount - ( config.getStartCardCount(0) + config.getStartCardCount(1) + blackCardCount );
        
        var wordSelectionFunction = () => { 
            var rnd  = GameUtil.randomIntFromInterval(0, sessionDictionary.length-1 );
            var result = sessionDictionary[rnd];

            sessionDictionary.splice(rnd, 1);

            return result;
        }

        cards = cards.concat( createCards( config.getStartCardCount(0), 0, CardType.Points, 'red', wordSelectionFunction ));
        cards = cards.concat( createCards( config.getStartCardCount(1), 1, CardType.Points, 'blue', wordSelectionFunction ));
        cards = cards.concat( createCards( 1, -1, CardType.Loss, 'black', wordSelectionFunction ));
        cards = cards.concat( createCards( whiteCardCount, -1, CardType.EndOfTurn, 'white', wordSelectionFunction ));
        
        return GameUtil.shuffle( cards, GameUtil.nextRandom );
    }
    
    
    function createCards( count : number, team : number, type : CardType, color : string, wordFunction : {() : string } ) {
        var result = [];
        
        for ( var i = 0; i < count; ++i ) {
            var card = new Card();

            card.type = type;
            card.team = team;
            card.color = color;
            card.word = wordFunction();
            card.isRevealed = false;

            result.push(card);
        }

        return result;
    }
}
