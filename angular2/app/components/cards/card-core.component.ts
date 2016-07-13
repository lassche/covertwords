import {Component, Input,  EventEmitter, Output} from "@angular/core";

import { CardBackComponent } from './card-back.component';
import { CardFrontComponent } from './card-front.component';
import { CardContainer } from './card-container.component';
import { CardViewModel } from './card-viewmodel';

import {CardStateChangedEvent} from './card-state-changed.event';



@Component({
    selector: 'card-core',

    directives: [ CardContainer, CardBackComponent, CardFrontComponent ],

     styleUrls : [ 'app/components/styles/colors.css'],

    template: `
        <card-container [_viewModel]="_viewModel" (onCardFlipped)="handleCardFlipped($event)">
            <front-content>

                <card-back [_isShowingColor]="_viewModel._isShowingColor" class="{{_viewModel._svgColorName}}" [_text]="_viewModel._text">
                </card-back>
                
            </front-content>

            <back-content>
                <card-front   [_text]="_viewModel._text">
                    <img src="{{_viewModel._imageName}}" width="138" height="98" />
                </card-front>
            </back-content>

        </card-container> 
    `,
})

export class CardCoreComponent {

    @Input() _viewModel : CardViewModel;
    @Output() onCardFlipped = new EventEmitter<CardStateChangedEvent>();

    handleCardFlipped( cardState : CardStateChangedEvent) {
        this.onCardFlipped.emit(cardState);
    }
}