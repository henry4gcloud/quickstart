import { Store } from "./service/Store";
import {GotaApp, GotaBoot} from "@gota/boot";

@GotaApp({
    name: 'StoreApp',
    scanner: [ Store ],
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
