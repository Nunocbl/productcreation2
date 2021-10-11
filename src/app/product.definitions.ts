
export interface Product{
    options:ProductOption[],
    size?:{width?:number, height?:number, dept?:number},
    weight?:number,
    category:string,
    subcategory:string,
    manufactor:Manufacturer,
    shortDescription:string,
    longDescription:string,
    colors:ColorDefinition[],
    documentation:File[]
    galleryImages:GalleryImage[],
    galleryVideo:GallaryVideo[]
}
export interface ProductOption{
    reference:string,
    name:string,
    value:number,
    discount?:DiscountDefinitions
}

export interface DiscountDefinitions{
    label:string,
    value:number,
    ratio:number,
    coupon?:string,
}

export interface Manufacturer{
    brand:string,
    name:string,
    logoUrl?:string
}

export interface GallaryVideo{
   label:string,
   url:string
}

export interface RgbColors{
    label:string,
    rgb:number[]
}

export interface ColorDefinition{
    title:string,
    colors:RgbColors[],
}

export interface GalleryImage{
    label:string,
    sm:string,
    md:string,
    lg:string,
    xl:string
}

export interface Category{
    label:string,
    slug:string,
    subs:SubCategory[]
}

export interface SubCategory{
    label:string,
    slug:string

}
