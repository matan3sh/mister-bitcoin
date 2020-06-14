import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  userName: String = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      if (user) this.goToHomePage();
    });
  }

  signup() {
    this.userService.signup(this.userName).subscribe((user) => {
      if (user) this.goToHomePage();
    });
  }

  goToHomePage() {
    this.router.navigateByUrl('/');
  }
}
