import Parse from 'parse';
import { Config } from './envInstance';

export const initParse = () => {
    Parse.initialize(Config.APP_ID, Config.JS_KEY);
    Parse.serverURL = Config.BACKEND_URL;

    // I don't know we'll use it for the moment
    //Parse.CoreManager.set("REQUEST_ATTEMPT_LIMIT", 1);
}