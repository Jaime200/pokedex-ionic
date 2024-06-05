import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    PokemonComponent
  ]

})
export class SharedModule { }
