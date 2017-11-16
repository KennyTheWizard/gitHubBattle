import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubArenaComponent } from './github-arena/github-arena.component';
import { BattleComponent } from './github-arena/battle/battle.component';
import { ResultsComponent } from './github-arena/results/results.component';
import { RankingsComponent } from './github-arena/rankings/rankings.component';



const routes: Routes = [
    { path: '', component: GithubArenaComponent, children: [
        { path: '', component: BattleComponent },
        { path: 'results', component: ResultsComponent },
        { path: 'rankings', component: RankingsComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
