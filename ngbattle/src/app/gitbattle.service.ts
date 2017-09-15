import { User } from './user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class GitbattleService {

  constructor(private http: Http) { }

  getPlayer(name: string){
    var url = "https://api.github.com/users/"+name;
    return this.http.get(url).map(data=>data.json()).toPromise();
  }

  setPlayer1(user: User){
    return this.http.post("/setplayer1", user).map(data=>data.json()).toPromise();
  }

  setPlayer2(user: User){
    return this.http.post("/setplayer2", user).map(data=>data.json()).toPromise();
  }

  getPlayer1(){
    return this.http.get("/getplayer1").map(data=>data.json()).toPromise();
  }

  getPlayer2(){
    return this.http.get("/getplayer2").map(data=>data.json()).toPromise();
  }

  getRankings(){
    return this.http.get("/getrankings").map(data=>data.json()).toPromise();
  }

}
