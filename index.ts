import { StoreService } from "./service/StoreService";
import {GotaApp, GotaBoot} from "@gota/boot";

@GotaApp({
    name: 'StoreApp',
    scanner: [ StoreService ],
    config: {
        hostName : 'localhost',
        port: 3001,
        devMode:true,
        database: {
            protocol:'mongodb+srv',
            host: 'cluster0-g6wi8.gcp.mongodb.net/test?retryWrites=true',
            user: 'admin',
            password: 'iC2gjdMkgrjDwF03',
            // options:{},
            databaseName:'gota'
        },
    }
})
class StoreApp{};

GotaBoot(StoreApp);
