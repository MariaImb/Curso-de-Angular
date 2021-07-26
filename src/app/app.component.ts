import { Component } from '@angular/core';

//DECORADOR
@Component({
  selector: 'app-root', //SELECTOR QUE LO CARGA
  templateUrl: './app.component.html', //TEMPLATE QUE SE CARGA
  styleUrls: ['./app.component.css'] //STYLES 
})

//CLASE
export class AppComponent {
  title = 'miprimeraApp';
  saludo = "Hola Alumnos de Angular";
}
