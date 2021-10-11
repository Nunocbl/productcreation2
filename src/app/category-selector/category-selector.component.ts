import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../product.definitions';

@Component({
    selector: 'category-selector',
    templateUrl: './category-selector.component.html',
    styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {

    slugsToInput: [] = []

    addingNewCategory: boolean = false
    addingNewSubCategory: boolean = false
    novacategoria: string = ''
    novasubcategoria: string = ''
    public selectedCategory: number = -1;


    public categories: Category[] = [
        {
            label: 'Ampliação Eletrónica',
            slug: 'ampliacao_eletronica',
            subs: [
                {
                    label: 'Something 1',
                    slug: 'some1'
                }
            ]
        },
        {
            label: 'Orientação e Mobilidade',
            slug: 'orientacao_e_mobilidade',
            subs: [
                {
                    label: 'Something 2',
                    slug: 'some2'
                }
            ]
        },
        {
            label: 'Proteção Visual',
            slug: 'protecao_visual',
            subs: []
        },

    ]

    constructor() { }

    ngOnInit(): void {
    }
    addNewCategory(){
        this.addingNewCategory=!this.addingNewCategory
        this.addingNewSubCategory= false

    }


    pushCategory(label: string) {

        let slug = this.string_to_slug(label)


        this.categories.push(
            {
                label: label,
                slug: slug,
                subs: []

            }
        )
        console.log(this.categories)
        this.addingNewCategory = false
        this.selectedCategory=this.categories.length-1

    }


    pushSubCategory() {

        let slug = this.string_to_slug(this.novasubcategoria)
        this.categories[this.selectedCategory].subs.push(
            {
                label: this.novasubcategoria,
                slug: slug
            }
        );

        this.addingNewSubCategory = false
        this.novasubcategoria = this.novasubcategoria

    }

    string_to_slug(str: string) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

}
