import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: `./appchild.component.html`
})

export class AppChildComponent {
    // handleclick() {
    //     console.log('hey I am  clicked in child');
    // }

    @Output() valueChange = new EventEmitter();
    counter = 0 ;

    valueChanged(){
        this.counter = this.counter +1;
        this.valueChange.emit(this.counter);
    }
}