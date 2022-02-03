import { Component } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat_client';
  connection = new signalR.HubConnectionBuilder()
                .withUrl("http://localhost:5001")
                .build();
  ngOnInit(){
    this.connection.on("Message Reçu", (message) => {console.log(message);});
    this.connection.start().catch(e =>document.write(e))
  }
}
