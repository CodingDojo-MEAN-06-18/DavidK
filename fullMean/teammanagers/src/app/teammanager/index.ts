import { GameComponent } from './games/game/game.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { ListplayersComponent } from './players/listplayers/listplayers.component';

import { TeammanagerComponent } from './teammanager.component';

export const component: any[] = [
  GameComponent,
  AddplayerComponent,
  ListplayersComponent,
  TeammanagerComponent
];

export * from './games/game/game.component';
export * from './players/listplayers/listplayers.component';
export * from './players/addplayer/addplayer.component';
export * from './teammanager.component';


