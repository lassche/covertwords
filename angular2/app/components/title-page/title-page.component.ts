import {Component, Input} from '@angular/core';
import {CodeNamesStateMachine} from '../../model/code-names-statemachine';

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

    constructor( private _stateMachine : CodeNamesStateMachine ) {
    }

    onBeginGame() {
        this._stateMachine.notifyTitleScreenComplete();
    }
}