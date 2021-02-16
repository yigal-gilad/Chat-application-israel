import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { StateManagementService } from "./state-management.service"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminFunctionsService {

  constructor(public http: HttpClient, public state: StateManagementService,
    public router: Router) { };

  searchUser(feed: string) {
    return this.http.post<any>(this.state.state.urls.searchUser, {
      token: this.state.state.user_jwt_token, feed: feed
    })
      .subscribe({
        next: data => {
          this.state.state.user_search_res = data.data;
        },
        error: error => {
          alert(error.error);
        }
      })
  }

  action(_id: string, action: string) {
    return this.http.post<any>(this.state.state.urls.actions, {
      token: this.state.state.user_jwt_token,
      target_id: _id,
      action: action
    })
      .subscribe({
        next: data => {
          alert(data.messege)
        },
        error: error => alert(error.error)
      })
  }

  removeUser(_id: string, index: number) {
    return this.http.post<any>(this.state.state.urls.removeUser, {
      token: this.state.state.user_jwt_token,
      target_id: _id,
    }).subscribe({
      next: data => {
        this.state.state.user_search_res.splice(index, 1);
        alert(data.messege);
      },
      error: error => alert(error.error)
    })
  }

  editSettings(settings: any) {
    this.router.navigate(['home'], { skipLocationChange: true });
    return this.http.post<any>(this.state.state.urls.editSettings, {
      token: this.state.state.user_jwt_token,
     
      credit: settings.credit_builder,
      disablechat: settings.is_allowed_to_chat,
      termsofuse: settings.terms_of_use,
      privacypolicy: settings.privacy_policy,
      appicon: settings.appicon,
      applogo: settings.applogo,
      facebooklink: settings.facebooklink ? settings.facebooklink : "none",
      instagramlink: settings.instagramlink ? settings.instagramlink : "none",
      linkedinlink: settings.linkedinlink ? settings.linkedinlink : "none",
      twitterlink: settings.twitterlink ? settings.twitterlink : "none",
      youtubelink: settings.youtubelink ? settings.youtubelink : "none"
    }).subscribe({
      next: data => {
        alert(data.messege);
      },
      error: error => alert(error.error)
    })
  }

}

