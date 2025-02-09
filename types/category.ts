interface Categories{
    _id : string;
    title: string;
    _type : "categories";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    category: string[];
    description: string;
    inventory: number;
    tags: string[];
    type : number;
    slug:{
        _type : "slug";
        current : string;
    }
    products: number;
    


}

export default Categories