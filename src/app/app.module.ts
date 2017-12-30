import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { UserComponent } from './user/index';
import { UserService } from './user/user.service';
import { ProjectService } from './project/project.service';
import { ProjectComponent } from './project/index';
import { TaskComponent } from './task/index';
import { TaskService } from './task/task.service';
import { ViewTaskComponent } from './viewtask/index';
import { ViewTaskService } from './viewtask/view-task.service';
import { HttpModule } from '@angular/http';
import { UserListService } from './shared/user-list.service';
import { UserDialogComponent } from './shared/index';
import { MatDialogModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProjectComponent,
    TaskComponent,
    ViewTaskComponent,
    UserDialogComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,


  ],
  entryComponents: [
    UserDialogComponent
  ],
  providers: [UserService, ProjectService, TaskService, ViewTaskService,UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
