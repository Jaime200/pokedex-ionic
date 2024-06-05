import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonsPageRoutingModule } from './pokemons-routing.module';

import { PokemonsPage } from './pokemons.page';
import { SharedModule } from '../../component/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonsPageRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [PokemonsPage]
})
export class PokemonsPageModule {}
