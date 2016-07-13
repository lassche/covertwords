import {Component, Input} from '@angular/core';

@Component({
    selector : 'title-component',

    template : "<h1>{{_title}}</h1>"

})

export class TitleComponent {

    @Input() _title : string = "title"; 
}