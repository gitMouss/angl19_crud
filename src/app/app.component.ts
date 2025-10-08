import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import {UserListComponent} from './components/user-list/user-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserFormComponent,UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angl_crud';
}

