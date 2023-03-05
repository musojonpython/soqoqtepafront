import axios from "axios";
import { getLang } from "../helpers";
import {BASE_URL} from './Urls'

export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Accept-Language': getLang()
    }
});
