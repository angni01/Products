import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    template: `<input type='number' [(ngModel)]='updatedratingvalue' placeholder = {{rating}}/> <button class='btn btn-primary'
    [style.background]='color'
    (click)="starRatingChanged()">Change Star Rating</button> `
})

export class StarRatingComponent implements OnChanges {
    @Input() rating: number;
    @Input() productId: number;
    @Output() starRatingChange = new EventEmitter();
    color = '';
    updatedratingvalue :number;

    starRatingChanged(){
        this.starRatingChange.emit({ id : this.productId, updatedratingvalue: this.updatedratingvalue});
        this.updatedratingvalue = null;
    }
    ngOnChanges(): void {
        if (this.rating == 5) {
            this.color = 'blue';
        } else if(this.rating==1) {
            this.color = 'red';
        }
        else {
            this.color = 'yellow';
        }
    }
}