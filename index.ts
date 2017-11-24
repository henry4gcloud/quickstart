import {Hello} from "./service/Hello";
import {GotaApp, GotaBoot} from "gota-boot";

@GotaApp({
    name: 'Hello',
    scanner: [Hello],
    config: {
        port: 3000,
        devMode:true
    }
})
class App{};

GotaBoot(App);
