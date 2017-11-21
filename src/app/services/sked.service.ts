import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/do";
import { UrlGet } from "../consts/sked.const";

@Injectable()
export class SkedService {
    urlGets: UrlGet;
    constructor(private http: HttpClient) {
        this.urlGets = new UrlGet;
    }

    getDataServer() {
        console.log('url request ' + this.urlGets.url)
        return this.http.get('http://sked.top/api/individuals/')
            .do(res => res);

    }

}