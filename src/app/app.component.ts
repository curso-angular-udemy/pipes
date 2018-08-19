import { Component } from '@angular/core';
import { resolve } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Fernando";
  nombre2 = "aBel aLonso arENcibia"
  array = [1,2,3,4,5,6,7,8];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Su casa",
      numero: 20
    }
  };

  valorDePromesa = new Promise ((resolve, reject) => {
    setTimeout (() =>{
      resolve ("llego el dato");
    }, 3000)
  });

  fecha = new Date();

  video = "wDjeBNv6ip0"

  activar = true;
}
