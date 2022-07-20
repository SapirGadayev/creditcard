import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor (public authService: AuthenticationService){}

  user$: Observable<User|null>  | undefined;

  ngOnInit(): void {
    this.user$= this.authService.currentUser$
  }

}
