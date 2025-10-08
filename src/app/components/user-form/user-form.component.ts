import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit{

  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService){}
  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void{
    if(this.userForm.valid){
      const newUser: User = {
        id: 0,
        ...this.userForm.value
      };

      this.userService.addUser(newUser).subscribe(() =>{
        alert('Utilisateur ajouté avec succès !');
        this.userForm.reset();
      });
    }
  }
}
