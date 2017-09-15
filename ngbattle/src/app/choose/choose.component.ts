import { GitbattleService } from './../gitbattle.service';
import { Component, OnInit } from '@angular/core';
import {User } from '../user';
@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {

  player1 = new User();
  player2 = new User();
  player1Found = false;
  player2Found = false;
  player1Err = false;
  player2Err = false;

  constructor(private gitService: GitbattleService) { }

  ngOnInit() {
  }

  getPlayer1(){
    var self = this;
    this.gitService.getPlayer(this.player1.name).then(result => {
      this.player1Found = true;
      this.player1Err = false;
      this.player1.image = result.avatar_url;
      var score = result.public_repos + result.followers;
      this.player1.score = score;
      this.gitService.setPlayer1(this.player1);
    }).catch(function(){
      self.player1Found = false;
      self.player1Err = true;
    })
  }

  getPlayer2(){
    var self = this;
    this.gitService.getPlayer(this.player2.name).then(result => {
      this.player2Found = true;
      this.player2Err = false;
      
      this.player2.image = result.avatar_url;
      var score = result.public_repos + result.followers;
      this.player2.score = score;
      this.gitService.setPlayer2(this.player2);
    }).catch(function(){
      self.player2Found = false;
      self.player2Err = true;
    })
  }


}
