import { StoreService } from "./service/StoreService";
import {GotaApp, GotaBoot} from '@gota/boot';
import {AccountService} from './service/AccountService';

@GotaApp({
    name: 'AccountApp',
    scanner: [ AccountService ],
    config: {
        hostName : 'localhost',
        port: 3001,
        devMode:true
    }
})
class AccountApp{};

GotaBoot(AccountApp);
