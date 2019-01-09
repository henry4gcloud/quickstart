import { StoreService } from "./service/StoreService";
import {GotaApp, GotaBoot} from "@gota/boot";

@GotaApp({
    name: 'StoreApp',
    scanner: [ StoreService ],
    config: {
        hostName : 'localhost',
        port: 3001,
        devMode:true
    }
})
class StoreApp{};

GotaBoot(StoreApp);
