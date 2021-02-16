import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateManagementService } from "./state-management.service";
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: any;
  constructor(public http: HttpClient,
    public state: StateManagementService,
    public router: Router,
    public zone: NgZone) {
    this.socket = io(this.state.state.urls.main);
    this.hendleRecivedEvent();
  }

  reciveSocketEvent(): Observable<any> {

    return new Observable((observer) => {
      this.socket.on('clintEvent', (payload) => {
        observer.next(payload);
      });
    });
  }

  sendChatMessege(messege: string) {
    this.socket.emit('serverEvent', {
      writer_id: this.state.state.current_user._id,
      writer_name: this.state.state.current_user.name,
      writer_profile_image: this.state.state.current_user.profile_image,
      writer_role: this.state.state.current_user.role,
      messege: messege
    });
  }

  hendleRecivedEvent() {
    this.reciveSocketEvent().subscribe(
      data => {
        this.zone.run(() => {
          var d = new Date();
          var h = d.getHours();
          var m = d.getMinutes();
          if (this.state.state.chat_messeges.length > 20) {
            this.state.state.chat_messeges.splice(-1, 1);
          }
          this.state.state.chat_messeges.unshift({
            time: h.toString() + ":" + m.toString(),
            writer_id: data.writer_id,
            writer_name: data.writer_name,
            writer_profile_image: data.writer_profile_image,
            writer_role: data.writer_role,
            messege: data.messege
          });
        })
      },
      error => {
        console.log(error);
      }
    );
  }
}
