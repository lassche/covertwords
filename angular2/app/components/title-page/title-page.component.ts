import {Component, Input} from '@angular/core';

import { Router } from '@angular/router-deprecated';

import { StateNames} from '../../model';
import {TitleComponent} from '../shared/title.component';

@Component({
    selector  : 'title-page',

    directives : [TitleComponent],

    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/page.css'
                , 'app/components/styles/button.css'
                , 'app/components/title-page/title-page.css'
    ],

    templateUrl  : "app/components/title-page/title-page.html",
})

export class TitlePageComponent {

    constructor( private router : Router ) {
    }

    onBeginGame() {
        this.router.navigate([StateNames.configuration]);
    }
}