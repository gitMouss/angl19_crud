import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService){}
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers():void{
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  deleteUser(id: number):void{
    if(confirm('Voulez-vous vraiment supprimer cet utilisateur ?')){
      this.userService.deleteUser(id).subscribe(() => {
        this.loadUsers();
      });
    }
  }

}
