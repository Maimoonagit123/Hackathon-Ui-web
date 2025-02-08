import { title } from "process";
import { defineType } from "sanity";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        { 
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            
        },


        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        }
    ],
});