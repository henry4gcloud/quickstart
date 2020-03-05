
import {BodyParameter, PathParameter, QueryParameter, RequestMethod, Service, ServiceMapping} from '@gota/service';
import {User} from "../models/User";
import {USERS_MOCK_DATA} from "../models/users-mock-data";

// mock await
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

@Service({path:'/account-service'})
export class AccountService{
    constructor(){
    }

    @ServiceMapping({path: '/users/:userId', requestMethod: 'GET'})
    async get(@PathParameter userId: string):Promise<User>{
        await delay(1);
        let user: User = USERS_MOCK_DATA.find(item => item._id === userId);
        return user;
    }

    @ServiceMapping({path:'/users'})
    async searchUsers(@QueryParameter username:string): Promise<Array<User>>{
        await delay(1);
       let users = USERS_MOCK_DATA.filter(userItem => userItem.name.indexOf(username) >= 0);
       return users;
    }

    @ServiceMapping({path: '/users', requestMethod: 'POST'})
    async create(@BodyParameter name : string, @BodyParameter gender : string,
                 @BodyParameter email: string, @BodyParameter phone: string, address: string): Promise<String>{
        await delay(1);
        let user: User = new User(name, email, phone);
        user.gender = (gender === User.GENDERS.MALE) ? User.GENDERS.MALE : User.GENDERS.FEMALE;
        user.address = address;
        user._id = (USERS_MOCK_DATA.length +1).toString();
        USERS_MOCK_DATA.push(user);

        return user._id;
    }


}