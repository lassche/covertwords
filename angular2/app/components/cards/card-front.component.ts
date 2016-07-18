import {Component, Input, ViewChild} from '@angular/core';

@Component( {
    selector: 'card-front',

     styleUrls : [ 'app/components/styles/colors.css'
                 , 'app/components/styles/label.css'
                 , 'app/components/cards/card.css'
    ],

    template: `
        <div class='card-body-front background-dark-hover' >
            
            <div class='card-label-front label-medium color-dark background-transparent-light'>
                {{_text}}
            </div>

            <div class='card-background-front'>
                <ng-content></ng-content>
           </div>
            
        <div>
    `
})

export class CardFrontComponent {
    private _isShowingFront : boolean = true;

    @Input() _text           : string = "";
    @Input() _isShowingColor : boolean = true;
}