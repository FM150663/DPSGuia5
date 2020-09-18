import { Injectable } from '@angular/core';

// Firebase
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// Model
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

   // Traer los datos de firebase
   studentList: AngularFireList<any>;

   // Una variable temporal, para guardar los datos seleccionados, del tipo Product
   selectedStudent: Student = new Student();
 
   constructor(private firebase: AngularFireDatabase) { }
 
   // Traer todos los productos desde firebase 
   getStudent() { // guarda los elementos en la varible 'products'
     return this.studentList = this.firebase.list('products');
   }
 
   // crear un nuevo producto  , recibiendo un parametro de tipo Product
   insertStudent(student: Student) {
     // agregar un dato al final de la lista, como recibe un objeto del tipo Product , puede acceder a sus propiedades
     this.studentList.push({
       nombre: student.nombre,
       apellido: student.apellido,
       edad: student.edad
     });
   }
 
   // Actualiza un producto, recibiendo un parametro de tipo Product
   updateStudent(student: Student) {
     // Utilizando el metodo update de firebase , se envia clave y los parametros que va actualizar 
     this.studentList.update(student.$key, {
       nombre: student.nombre,
       apellido: student.apellido,
       edad: student.edad
     });
   }
 
   // Elimina un producto, recibiendo como parametro la clave , utilizando el metodo remove de firebase
   deleteStudent($key: string) {
     this.studentList.remove($key);
   }
}
