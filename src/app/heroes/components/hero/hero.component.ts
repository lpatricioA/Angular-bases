import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


public name: string ='IronMan';
public age: number=45;


get capitalizedName():string{
  return this.name.toUpperCase();
};

getHeroDescription(): string{
  return `${this.name}-${this.age}`;
}

changeHero():void{
this.name='Spiderman';

throw 'Metodo no implementado'
}

changeAge():void{
  //TODO:
this.age=25;
}
resertForm():void{

  this.name='IronMan';
  this.age=45;
  }

}
