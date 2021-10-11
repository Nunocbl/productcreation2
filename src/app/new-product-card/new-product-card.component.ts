import { Product, ProductOption } from './../product.definitions';
import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Category } from '../product.definitions';


@Component({
    selector: 'new-product-card',
    templateUrl: './new-product-card.component.html',
    styleUrls: ['./new-product-card.component.scss']
})
export class NewProductCardComponent implements OnInit {
    @Output('outCategories') outCategories = new EventEmitter<Category>()
    @Output('outAddingNewCategory') outAddingNewCategory = new EventEmitter<boolean>()

    public product: Product = {
        options: [
            {
                reference: 'This is me',
                name: ' we love it',
                value: 55,
            }
        ],

        // size?:{width?:number, height?:number, dept?:number},
        // weight?:number,
        category: '',
        subcategory: '',
        manufactor: {
            brand: '',
            name: '',
            logoUrl: ''
        },
        shortDescription: '',
        longDescription: '',
        colors: [],
        documentation: [],
        galleryImages: [],
        galleryVideo: []
    }
    // public productForm = new FormGroup({})


    addingNewCategory: boolean = false

    constructor() { }

    ngOnInit(): void {
    }



    submitProduct(value: any) {
        console.log(value)

    }

    addNewCategory(){
        this.addingNewCategory = !this.addingNewCategory
        this.outAddingNewCategory.emit(this.addingNewCategory)

    }


    addNewComponent() {
        this.product.options.push(
            {
                reference: '',
                name: '',
                value: 0,
            }
        )
    }


    removeOption(index:number) {
        console.warn('Remove this index',index)
        this.product.options.splice(index,1)
    }

    updateOption(index:number,option:ProductOption) {
    }

}
