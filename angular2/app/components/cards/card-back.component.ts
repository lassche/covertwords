/** 
 * Back side of a card. Difference between this and the front side is that the back
 * does not show the color of the if the current role of the client is 
 * the role of operatives.
 */
import {Component, Input, ViewChild} from '@angular/core';

@Component( {
    selector: 'card-back',

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
            flex-direction: column;
            justify-content:center;
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
            width: 100%;
            z-index: 2;
        }


        .card-background {
            position: absolute;
            left: 0;
            top: 0;
        }
    `],

    template: `
        <div class='card-body background-dark-hover' >
            
            <div class='card-label label-medium color-accent background-transparent-dark'>
                {{_text}}
            </div>

            <div *ngIf="_isShowingColor" class='card-background'>
                <svg width="148" height="108" >
                    <!--
                      M - move to
                      L - line to
                      A - arc rx ry x-axis-rotation large-arc-flag sweep-flag x y
                      Z - close
                    -->
                    <path d="M 15  10 
                             L 50  10 
                             L 10  38 
                             L 10  13 
                             A 5   5  0 0 1 15 10 
                             Z" >
                    </path>
                </svg>
           </div>
            
            <div *ngIf="_isShowingColor" class='card-background'>
                <svg width="148" height="108">
                    <!--
                      M - move to
                      L - line to
                      A - arc rx ry x-axis-rotation large-arc-flag sweep-flag x y
                      Z - close
                    -->
                    <path d="M 133 98 
                             L 98  98 
                             L 138 68 
                             L 138 95 
                             A 5   5  0 0 1 133 98 
                             Z" >
                    </path>
                </svg>
            </div>

            <div *ngIf="_isShowingColor" class='card-background' >
                <svg width="148" height="108">
                    <!--
                      M - move to
                      L - line to
                      A - arc rx ry x-axis-rotation large-arc-flag sweep-flag x y
                      Z - close
                    -->
                    <path d="M 88  98 
                             L 83  98 
                             L 138 58 
                             L 138 63 
                             Z" >
                    </path>
                </svg>
            </div>
        <div>
    `

})

export class CardBackComponent {
    private _isShowingFront : boolean = true;

    @Input() _text           : string = "";
    @Input() _isShowingColor : boolean = true;
    
    @ViewChild( '_cardBody') _cardBody;
}