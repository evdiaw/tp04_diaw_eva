import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../core/Client';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(public clientService: ClientService) { }

  client: Client = new Client();
  

  ngOnInit(): void {
  }

  clic(): void {
    console.log("clic activé");
  }

}
