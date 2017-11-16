import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResultsComponent implements OnInit {

  playerOneForDB:Player = new Player();
  playerTwoForDB:Player = new Player();

  playerOne;
  playerTwo;

  firstPlace;
  secondPlace;

  constructor(private _players:PlayerService) {
    this.playerOne = this._players.playerOne;
    this.playerTwo = this._players.playerTwo;
   }
  

  ngOnInit() {

    console.log(this.playerOne);
    console.log(this._players.playerOne);
    this.playerOneForDB.username = this.playerOne.login;
    this.playerOneForDB.score = ( this.playerOne.public_repos + this.playerOne.followers ) * 12;
    this.playerOneForDB.avatarUrl = this.playerOne.avatar_url;
    
    console.log(this.playerTwo);
    console.log(this._players.playerTwo);
    this.playerTwoForDB.username = this.playerTwo.login;
    this.playerTwoForDB.score = ( this.playerTwo.public_repos + this.playerTwo.followers ) * 12;
    this.playerTwoForDB.avatarUrl = this.playerTwo.avatar_url;

    if (this.playerOneForDB.score > this.playerTwoForDB.score){
      this.firstPlace = this.playerOneForDB;
      this.secondPlace = this.playerTwoForDB;
    } else {
      this.firstPlace = this.playerTwoForDB;
      this.secondPlace = this.playerOneForDB;
    }
    
    this._players.savePlayer(this.playerOneForDB);
    this._players.savePlayer(this.playerTwoForDB);

  }
}
