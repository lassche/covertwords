import {Component, Input} from '@angular/core';

@Component({
    selector : 'input-component',

    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/input.css'
    ],


    template : `
        <div class="input-container">

            <span class="input-title color-primary">
                {{_header}}
            </span>
            
            <input class="input-field background-dark color-accent border-accent" type="text" [(ngModel)]="_inputText">
        </div>
    `,

})

export class InputComponent {

    @Input() _header : string = "header";
    @Input() _inputText : string = "input text"; 
}