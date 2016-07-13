import {Component, Input, AfterViewChecked, OnChanges, ViewChild, SimpleChange, EventEmitter, Output } from '@angular/core';

@Component({
    selector : 'toggle-button',

    styleUrls : [ 'app/components/styles/colors.css'
                , 'app/components/styles/toggle-button.css' 
    ],            

    template : `
        <div #_buttonElement 
            class="toggle-button-state-default toggle-button-component"
            (click)='toggleState()'>

            <ng-content></ng-content>
        
        </div>`,

})

export class ToggleButtonComponent implements OnChanges, AfterViewChecked {

    @Input() _isToggled         : boolean = false;
    @Input() _canUnToggle       : boolean = true;
    @Input() _id                : number  = 0;

    @Input() _colorClass        : string = "";
    @Input() _backgroundClass   : string = "";
    @Input() _colorToggledClass : string = "";
    
    @Output() onToggle = new EventEmitter<ToggleButtonComponent>();

    @ViewChild('_buttonElement') _buttonElement;
     
    private TOGGLED_CLASS_NAME : string = 'toggle-button-component toggle-button-state-toggled';
    private DEFAULT_CLASS_NAME : string = 'toggle-button-component toggle-button-state-default';

    ngAfterViewChecked() {
        this.updateState();
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {

         for ( var item in changes ) {
            if ( item == '_isToggled' ) {
                this.updateState();          
            }
         }
    }

    toggleState() {
        if ( this._canUnToggle || !this._isToggled )  {
            this._isToggled = !this._isToggled;
            this.onToggle.emit( this );
        }
    }

    updateState() {
        if (this._buttonElement != null ) {

            if ( this._isToggled ) {
                this._buttonElement.nativeElement.className = this.TOGGLED_CLASS_NAME 
                                                            + " " + this._colorToggledClass
                                                            + " " + this._backgroundClass;
             }
            else {
                this._buttonElement.nativeElement.className = this.DEFAULT_CLASS_NAME
                                                            + " " + this._colorClass
                                                            + " " + this._backgroundClass;

            }
        }
    }
}