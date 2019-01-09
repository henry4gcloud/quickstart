
import {QueryParameter, RequestMethod, Service, ServiceMapping} from '@gota/service';
import {User} from "../models/User";

@Service({path:'/user-service'})
export class UserService{
    constructor(){
    }
    //
    //@ServiceMapping({path:['/hi','/hii']})
    //readCategory(@QueryParameter lastName:string, @QueryParameter firstName:string): User{
    //    let user = new User(firstName, lastName, null);
    //    return user;
    //}
}