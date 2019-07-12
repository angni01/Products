import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector : 'prod-child',
    templateUrl : './addproduct.component.html'
})

export class ProductChildComponent{
    @Output() addingProduct: EventEmitter<any> =  new EventEmitter;
    newName : string;
    newCode : string;
    newReleaseDate : string;
    newPrice : Number;
    newDescription : string;
    newStarRating : Number;
    newImageUrl : string;
    newProduct : any;
    onAddProduct(){
        this.newProduct = {productName: this.newName, productCode : this.newCode,
            releaseDate : this.newReleaseDate, description: this.newDescription ,
            price : this.newPrice , starRating: this.newStarRating, imageUrl: this.newImageUrl};
        //console.log(this.newProduct);
        this.addingProduct.emit(this.newProduct);
        this.newName = null;
        this.newCode = null;    
        this.newReleaseDate = null;
        this.newPrice = null;
    }
}