import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponent/todos/todos.component';
import { TodoComponent } from './Mycomponent/todo/todo.component';
import { AddtodoComponent } from './Mycomponent/addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent, AddtodoComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
