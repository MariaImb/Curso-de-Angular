import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})


export class EmpleadoComponent implements OnInit {
  //creo estas propiedades y luego tengo que incorporarlas en la plantilla
  nombre="Juan";
  apellido="Díaz";
  edad=28; //si antepongo la palabra private no se puede acceder a esta propiedad desde otro archivo como ser desde el html para eso debo utilizar el metodo de acceso get

  //empresa="Pildoras Informaticas";

  /*llamaEmpresa(value: string){

  }*/

  // getEdad(){
  //   return this.edad;
  // }

  //hago una binding property
  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event: Event){
    //alert("El usuario se acaba de registrar");
    //this.textoDeRegistro="El usuario se acaba de registrar"
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
