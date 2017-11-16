import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class PlayerService {
  players: Player[] = [];
  private _playerList : BehaviorSubject<Player[]> = new BehaviorSubject([]);
  playerOne = null;
  playerTwo = null;
  playerList: Observable<Player[]> = this._playerList.asObservable();
  apiURL:string = 'https://api.github.com/users/'
  apiKey:string = '?access_token=e437a4194eb3fc3ba9a040a4de2302ee4b62673e'
  constructor(private _http:HttpClient) {
    this.getPlayers();
  }

  getPlayers(){
    this._http.get('/players').map(resp=><Player[]>resp).subscribe((resp)=>{
      this.players = resp;
      this.sortPlayers();
      this._playerList.next(this.players);
    })
  }

  createPlayer(newPlayer: Player){
    this._http.post('/players', newPlayer).map(resp => <Player>resp).subscribe((resp)=>{
      this.players.push(resp);
      this.sortPlayers();
      this._playerList.next(this.players);
    })
  }

  editPlayer(editedPlayer: Player, playerIndex:number){
    this._http.put('/players/edit/' + editedPlayer.username, editedPlayer).subscribe((resp)=>{
      //check resp
      this.players[playerIndex].score = editedPlayer.score;
      this.players[playerIndex].avatarUrl = editedPlayer.avatarUrl;
      this.sortPlayers();
      this._playerList.next(this.players);
    })
  }

  savePlayer(thePlayer: Player){
    for (let i = 0; i < this.players.length; i++){
      if (this.players[i].username == thePlayer.username){
        this.editPlayer(thePlayer, i);
        return;
      }
    }
    this.createPlayer(thePlayer);
  }

  sortPlayers(){
    this.players.sort((a, b) => b.score - a.score)
  }

  setPlayerOne(username:string, callback){
    this._http.get(this.apiURL + username + this.apiKey).subscribe((resp)=>{
      this.playerOne = resp;
      console.log(this.playerOne);
      callback(this.playerOne);
    }, (errors) => {
      this.playerOne = null;
      console.log(errors);
      callback(this.playerOne);
    })
  }
  setPlayerTwo(username:string, callback){
    this._http.get(this.apiURL + username + this.apiKey).subscribe((resp)=>{
      
      this.playerTwo = resp;
      callback(this.playerTwo);
      
    }, (errors) => {
      this.playerTwo = null;
      console.error(errors);
      callback(this.playerTwo);
    })
  }

}
