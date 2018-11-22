import { Store } from "./service/Store";
import {GotaApp, GotaBoot} from "@gota/boot";
import { UserService } from "./service/UserService";
import { Connection } from "@gota/dao";

@GotaApp({
    name: 'StoreApp',
    scanner: [ Store, UserService, Connection ],
    config: {
        hostName : 'localhost',
        port: 3001,
        devMode:true,
        database: {
            host: 'localhost',
            port: 27017,
            databaseName:'my_data'

        }
    }
})
class App{};

GotaBoot(App);
