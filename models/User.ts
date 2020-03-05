import {Model,Entity} from '@gota/dao';
import {Address} from './Address';

@Entity()
export class User extends Model {
    name:String;
    gender: User.Gender;
    email:String;
    phone:String;
    address: String | Address;
    constructor(name:string,  email:string, phone:string){
        super({name, email, phone});
    }
}

export namespace User {
    export type Gender = 'Female' | 'Male';
    export const GENDERS = {
        MALE: 'Male' as Gender,
        FEMALE: 'Female' as Gender
    }
}