import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BattleComponent implements OnInit {

  playerOne;
  playerTwo;

  userNameOne: string;
  userNameTwo: string;

  constructor(private _players:PlayerService, private _router:Router) { }

  ngOnInit() {
  }

  getUserOne(){
    this._players.setPlayerOne(this.userNameOne, (resp)=>{
      this.playerOne = resp;
    });
    console.log(this.playerOne);
  }

  getUserTwo(){
    this.playerTwo = this._players.setPlayerTwo(this.userNameTwo, (resp)=>{
      this.playerTwo = resp;
    });
  }

  startBattle(){
    this._router.navigate(['/results']);
  }

}
