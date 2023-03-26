import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // properties
  messages: string[] = [];

  // add a message
  add(message: string) {
    this.messages.push(message);
  }

  // clear messages
  clear() {
    this.messages = []
  }

  // constructor
  constructor() { }
}
