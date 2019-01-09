
import {QueryParameter, RequestMethod, Service, ServiceMapping, PathParameter, Body} from "@gota/service";
import { Config } from "@gota/injection";

export class Product{
    id: number;
    name: string;
    price: number;
    tags: Array<string>
    constructor(id: number, name: string, price: number, tags: Array<string>){
        this.id = id;
        this.name = name;
        this.price = price;
        this.tags = tags;
    }
}

let data = [
    new Product(1, 'A green door', 12.50, ["home", "green"]),
    new Product(2, 'A blue mouse', 10, undefined),
    new Product(3,  'An ice sculpture', 20.30, ["cold", "ice"])
];

@Service({path:'/store-service'})
export class StoreService{
    @Config()
    private database: object;
    constructor(){
    }

    @ServiceMapping({path:'/database-config'})// Only demo service
    getDatabaseConfig(): object{
        return this.database;
    }

    @ServiceMapping({path:'/products'})
    getSearch(@QueryParameter name:string): Array<Product>{
        return name ?  data.filter(product => product.name.includes(name)) : data;
    }

    @ServiceMapping({path:'/products/:id', requestMethod: RequestMethod.GET})
    getProduct(@PathParameter id:number): Product | {}{
        return data.filter(product => product.id === id.valueOf())[0] || {}
    }

}