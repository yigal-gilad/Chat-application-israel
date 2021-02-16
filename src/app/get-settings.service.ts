import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Title, Meta } from '@angular/platform-browser';
import { StateManagementService } from "./state-management.service";

@Injectable({
  providedIn: 'root'
})
export class GetSettingsService {

  constructor(public http: HttpClient, public router: Router,
    public titleService: Title, public metaService: Meta,
    public state: StateManagementService) {
    this.getSettings();
  }

  getSettings() {
    return this.http.get<any>(this.state.state.urls.getsettings)
      .subscribe({
        next: data => {
          this.state.state.site_settings.is_allowed_to_chat = data[0].chatdisabled;
          this.state.state.site_settings.credit_builder = data[0].creditbuilder;
          this.state.state.site_settings.terms_of_use = data[0].termsofuse;
          this.state.state.site_settings.privacy_policy = data[0].privacypolicy;
          this.state.state.site_settings.appicon = data[0].appicon;
          this.state.state.site_settings.applogo = data[0].applogo;
          this.state.state.site_settings.social_links.facebooklink = data[0].facebooklink;
          this.state.state.site_settings.social_links.instagramlink = data[0].instagramlink;
          this.state.state.site_settings.social_links.linkedinlink = data[0].linkedinlink;
          this.state.state.site_settings.social_links.twitterlink = data[0].twitterlink;
          this.state.state.site_settings.social_links.youtubelink = data[0].youtubelink;
          
          // this.titleService.setTitle(this.state.state.site_settings.title);
          // this.metaService.addTags([
          //   { name: 'title', content: this.state.state.site_settings.title},
        
          // ]);
        },
        error: error => {
          alert(error.error);
          
        }
      })
  }

}
