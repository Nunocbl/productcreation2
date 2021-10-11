import { ProductOption } from './../product.definitions';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'product-option',
    templateUrl: './product-option.component.html',
    styleUrls: ['./product-option.component.scss']
})
export class ProductOptionComponent implements OnInit {
    @Input('howmany') numberOfSiblings: number = 0;
    @Input('value') option:ProductOption = {
        reference:'',
        name:'',
        value:0,
    }
    @Output('change') modified = new EventEmitter<ProductOption>()
    @Output('delete') requestDelete = new EventEmitter<any>()

    isItChecked:boolean= false
    constructor() { }

    ngOnInit(): void {
    }

    iAmAChangedData() {
        this.modified.emit(this.option)
    }


    deleteMe() {
        this.requestDelete.emit({})
    }

}


