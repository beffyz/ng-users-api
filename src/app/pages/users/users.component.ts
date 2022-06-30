import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$?: Observable<User[]>;
  loading$?: Observable<boolean>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.getUsers();
    this.loading$ = this.usersService.getLoadingState();
  }
}
