import { RequestParams } from './lib/types';
import axios, { AxiosResponse } from 'axios';
import * as config from '../config';

const baseURL = `https://api.edamam.com/search?app_id=${config.APP_ID}&app_key=${config.APP_KEY}`;


export const search = (params:RequestParams)=> {
    const strings = Object.keys(params).map(key => params[key].map(param => `&${key}=${[param]}` ))

    let queryString = strings.join("").replace(/,/g, '');

    if (!params.q.length) {
        queryString = queryString.concat(`&q= `);
    }

    return axios.get(`${baseURL}${queryString}`)    
}