import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../player.service';
import { Player } from '../../player';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RankingsComponent implements OnInit {

  playerList:Player[];
  
  constructor(private _players:PlayerService) { }

  ngOnInit() {
    this._players.getPlayers();
    this._players.playerList.subscribe((resp)=>{
      this.playerList = resp;
    })
  }

}
