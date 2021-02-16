import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, } from '@angular/common/http';
import { SocialLoginModule, AuthService, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignUpService } from './sign-up.service'
import { PipesModule } from './pipes.module';
import { StateManagementService } from './state-management.service';
import { GetSettingsService } from "./get-settings.service";
import { SocketService } from "./socket.service";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("365499769067-mq5h0oqmupsfuljapfgkar5kkok2v4eq.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("251669619762230")
  }
]);
export function provideConfig() {
  return config;
}




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    SocialLoginModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PipesModule
  ],
  providers: [
    GetSettingsService,
    AuthService,
    SignUpService,
    StateManagementService,
    SocketService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
