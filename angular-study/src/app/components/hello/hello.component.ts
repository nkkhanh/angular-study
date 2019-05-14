import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.less']
})
export class HelloComponent implements OnInit {

	public email: string;
	public password: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
  	console.log('login');
  	console.log(this.email);
  	console.log(this.password);
  }

}
