import {Model,Entity} from '@gota/dao';
import {Geographic} from './Geographic';

@Entity()
export class Address {
    street: String;
    suite: String;
    city: String;
    zipcode: String;
    geographic: Geographic;
}