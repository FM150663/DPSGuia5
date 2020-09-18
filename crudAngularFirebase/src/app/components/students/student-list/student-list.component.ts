import { Component, OnInit } from '@angular/core';

// model
import { Student } from '../../../models/student';

// service
import { StudentService } from '../../../services/student.service';

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
  studentList: Student[];

  constructor(
    private studentService: StudentService,
    private toastr: ToastrService
  ) { }

  /* 
    Cuando cargue la aplicación, que reciba toda la información con el método 'getProducts' del servicio de firebase
     pero ademas que utilice el metodo 'snapshotChanges' para estar atento a los cambios que tengas los datos en la
     base de datos de firebase, para recorrerlo con forEach. 
  
     Cada dato lo obtengo 'payload' y lo convierto en formato JSON y lo asigno a la variable 'x'
     let x = element.payload.toJSON();
  
     Se le asigna por cada elemento la llave de cada registro, en una propiedad llamada '$key'
     por que se necesita para luego eliminar el registro
     x["$key"] = element.key;
  
     Cuando ya se tiene el elemento se asigna a mi arreglo 'productList' para ser mostrado en mi pantalla list
     this.productList.push(x as Product);
  */
 ngOnInit() {
  return this.studentService.getStudent()
    .snapshotChanges().subscribe(item => {
      this.studentList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.studentList.push(x as Student);
      });
    });
}

/* 
   Recibe una varible de tipo 'Product' para invocar el servicio de firebase, para actualizarlo
   Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, product)'  
  */
 onEdit(student: Student) {
  this.studentService.selectedStudent = Object.assign({}, student);
}

onDelete($key: string) {
  if (confirm('Are you sure you want to delete it?')) {
    this.studentService.deleteStudent($key);
    this.toastr.warning('Deleted Successfully', 'Product Removed');
  }
}

}
