import { GitbattleService } from './../gitbattle.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  winner = new User();
  loser = new User();
  constructor(private gitService:GitbattleService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(){
    var self = this;
    console.log("invoked getPlayers");
    this.gitService.getPlayer1().then((result) => {
      this.gitService.getPlayer2().then(result2 => {
        console.log('p1');
        console.log(result);
        console.log('p2');
        console.log(result2);
        
        if(result.score >= result2.score){
          console.log("P1 WINS");
          console.log(result2);
          this.winner = result;
          this.loser = result2;
        }
        else{
          console.log("P2 WINS");
          this.winner = result2;
          this.loser = result;
        }
      })
    }
    )
  }

}
