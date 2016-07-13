import {Component, Input} from '@angular/core';

@Component({
    selector : 'toggle-list',

    styleUrls : [],


    template : `
    <ngcontent>
    `,

})

export class InputComponent {

    @Input() _selectedItem : number = 0;
    @Input() _components = [];

}