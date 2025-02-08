export interface Products {
    _id : string;
    title: string;
    _type : "products";
    price: number;
    priceWithoutDiscount: number;
    badge: string;
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
}
export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
}

interface PriceFilterProps {
    onFilterChange: (value: number[]) => void;
  }