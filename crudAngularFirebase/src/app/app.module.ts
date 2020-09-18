import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

//firebase
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { AngularFireStorageModule } from '@angular/fire/storage';
//import { AngularFireAuthModule } from '@angular/fire/auth';

//components
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

//service
import { ProductService } from './services/product.service';

//Toastr, para notificaciones en a gular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//routing
import { AppRoutingModule } from './app-routing.module';
import { StudentsComponent } from './components/students/students.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { StudentComponent } from './components/students/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    StudentsComponent,
    StudentListComponent,
    StudentComponent
  ],
  //incorporando todas las dependencias
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  //servicios configurados de forma global
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
