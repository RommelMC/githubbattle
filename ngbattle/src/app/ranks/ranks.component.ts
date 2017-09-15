import { GitbattleService } from './../gitbattle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {

  users = [];
  constructor(private gitService: GitbattleService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
      this.gitService.getRankings().then(result => {
        this.users = result;
      });
  }

}
