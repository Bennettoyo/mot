import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { timeout } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class HttpService {

  // private server = 'https://localhost:44357/api/';
  private server = 'https://mot-history-server.jackbennetto.co.uk/api/';

  constructor(public httpClient: HttpClient) { }


  public get(registrationNumber: string) {
    return this.httpClient.get(this.server + registrationNumber, {
      responseType: 'json',
    }).pipe(timeout(120000));
  }
}

