
import {QueryParameter, RequestMethod, Service, ServiceMapping} from "gota-service";

function timeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn:Function, args:Array<string>) {
    await timeout(3000);
    return fn(...args);
}
export class User{

    private lastName:string;
    private firstName:string;
    constructor(firstName: string, lastName: string){
        this. lastName = lastName;
        this.firstName = firstName;
    }

}

@Service({path:'/quick_start'})
export class Hello{
    constructor(){
    }

    @ServiceMapping({path:['/hi','/hello']})
    hello(@QueryParameter lastName:string, @QueryParameter firstName:string): User{
        let user = new User(firstName, lastName);
        return user;
    }

    @ServiceMapping({requestMethod:[RequestMethod.GET,RequestMethod.POST], path: '/async'})
    async async(@QueryParameter lastName:string, @QueryParameter firstName:string):Promise<User>{
        return await sleep(this.hello, [lastName, firstName]);
    }
}