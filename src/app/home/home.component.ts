import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GetSettingsService } from "../get-settings.service"
import { StateManagementService } from "../state-management.service";
import { SocketService } from "../socket.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chatInput: string;

  constructor(public settings: GetSettingsService,
    public state: StateManagementService,
    public socket: SocketService,
    public router: Router) { }
  ngOnInit() {
    this.chatInput = "";
    this.settings.getSettings();
  }

  sendMessege() {
    this.socket.sendChatMessege(this.chatInput);
    this.chatInput = "";
  }

}
