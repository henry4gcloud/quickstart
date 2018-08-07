import {GotaApp, GotaBoot} from "@gota/boot";
import {Connection} from "@gota/dao";
import {UserService} from "./service/UserService";

@GotaApp({
    name: 'Hello',
    scanner:  [UserService, Connection],
    config: {
        hostName : 'localhost',
        port: 3000,
        devMode:true,
        database: {
            host: 'localhost',
            port: 27017,
            databaseName:'gota'
        }
    }
})
class App{};

GotaBoot(App);
