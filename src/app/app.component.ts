import { Component } from '@angular/core';
import {Component, OnInit} from '@angular/core';

export class cardinalsMMR {
  constructor(
    public id:number,
    public name: string,
    public elo:number,
  ){}
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'cardinals';
  cardinal: cardinalsMMR[];
  constructor(
  private httpClient: HttpClient
  ) {}
  ngOninit() : void{
  this.getMMR();
  }
  
  getMMR(){
    this.httpClient.get<any>('https://lunacia.skymavis.com/game-api/leaderboard?client_id=0x40f12011594d42cd5a9cf259ec89e3072e85b12c'.subscribe(
      response => { 
        console.log(response);
        this.cardinal = response;
      }
      );
                             }
  
}



