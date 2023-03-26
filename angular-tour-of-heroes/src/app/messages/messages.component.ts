import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  // message service must be public to bind in
  // the template. Angular ONLY binds to PUBLIC
  // component properties
  constructor(public messageService: MessageService) {}
}
