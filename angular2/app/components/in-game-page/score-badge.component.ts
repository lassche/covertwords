import {Component, ViewChild, Input } from '@angular/core';


@Component({
    selector  : 'score-badge',

    directives : [ScoreBadgeComponent],

    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/badge.css'
    ],

    template  : `
        <div class="badge-large  background-base">
            <div class="badge-large-content {{_borderColorCSS}}">
                <div class="badge-large-text color-dark">{{_score}}</div>
            </div>
        </div>

    `,
})

export class ScoreBadgeComponent  {

    @Input() _score : number;
    @Input() _borderColorCSS : string ='border-blue';
}