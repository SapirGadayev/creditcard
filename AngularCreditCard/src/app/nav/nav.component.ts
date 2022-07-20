import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from 'firebase/auth';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor (public authService:AuthenticationService,
    private breakpointObserver: BreakpointObserver){}

    isLoggedIn$: Observable<boolean> | undefined;
    currentUser$: Observable<User|null> | undefined;

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.currentUser$= this.authService.currentUser$;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    logoutnav(){
    this.authService.loggedIn.next(false); 
    }


}
