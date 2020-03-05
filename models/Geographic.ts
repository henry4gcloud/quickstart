import {Model,Entity} from '@gota/dao';

@Entity()
export class Geographic{
    latitude: Number;
    longitude: Number;
}