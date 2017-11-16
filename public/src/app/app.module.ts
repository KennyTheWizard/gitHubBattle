import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PlayerService } from './player.service'
import { AppComponent } from './app.component';
import { GithubArenaComponent } from './github-arena/github-arena.component';
import { BattleComponent } from './github-arena/battle/battle.component';
import { ResultsComponent } from './github-arena/results/results.component';
import { RankingsComponent } from './github-arena/rankings/rankings.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubArenaComponent,
    BattleComponent,
    ResultsComponent,
    RankingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
