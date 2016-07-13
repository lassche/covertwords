import {Component, Input, ViewChild} from '@angular/core';

@Component( {
    selector: 'card-front',

     styleUrls : [ 'app/components/styles/colors.css'
                 , 'app/components/styles/page.css'
                 , 'app/components/styles/input.css'
                 , 'app/components/styles/label.css'
                 , 'app/components/styles/toggle-button.css'
                 , 'app/components/title-page/title-page.css'
    ],

    styles: [`
        .card-body {
            width: 148px;
            height: 108px;
            
            position: relative;
            display: flex;
            flex-direction: column-reverse;
            align-items:center;
                        
            border-radius: 5px;
            box-shadow: 0px 5px 4px #282828;
            margin:10px;

            perspective: 800px;
            
        }
        
        .card-body:hover {
            transform: scale(1.025, 1.025);
        }
        
        .card-label {

            z-index: 2;
            width: 100%;
            margin-bottom: 4px;
            margin-left:   8px;
            margin-right:  8px;
        }

        .card-background {
            position: absolute;
            left: 5;
            top: 5;
        }
    `],

    template: `
        <div class='card-body background-dark-hover' >
            
            <div class='card-label label-medium color-dark background-transparent-light'>
                {{_text}}
            </div>

            <div class='card-background'>
                <ng-content></ng-content>
           </div>
            
        <div>
    `

})

export class CardFrontComponent {
    private _isShowingFront : boolean = true;

    @Input() _text           : string = "";
    @Input() _isShowingColor : boolean = true;
    
    @ViewChild( '_cardBody') _cardBody;
}