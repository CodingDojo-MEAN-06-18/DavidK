import { WinnerComponent } from './battle/winner/winner.component';
import { RankingsComponent } from './rankings/rankings.component';
import { FaceoffComponent } from './battle/faceoff/faceoff.component';
import { UsernameComponent } from './username/username.component';
import { BattleComponent } from './battle/battle.component';


export const components: any[] = [
  RankingsComponent,
  WinnerComponent,
  FaceoffComponent,
  UsernameComponent,
  BattleComponent
];

export * from './battle/winner/winner.component';
export * from './battle/faceoff/faceoff.component';
export * from './username/username.component';
export * from './rankings/rankings.component';
export * from './battle/battle.component';

