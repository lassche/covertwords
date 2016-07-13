import { Router } from '@angular/router-deprecated';

export class ApplicationState {

    onStateStart : { () : void };
    onStateEnd : { () : void };

    navigationTarget : string;

    navigateToTarget( router : Router) {
        router.navigate( [this.navigationTarget] );
    }
    
}