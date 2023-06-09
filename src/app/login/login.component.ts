import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	username: string = "";
	password: string = "";

	constructor(private route: Router) { }

	ngOnInit(): void {
	}

	onClickLogin() {
		if (this.username == "test" && this.password == "/test$1234/test") {
			this.route.navigate(['dashboard']);
		} else {
			window.alert("Anmeldung fehlgeschlagen!");
		}
	}

}
