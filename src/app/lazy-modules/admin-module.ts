import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { PipesModule } from "../pipes.module";

import { SiteSettingsComponent } from "../site-settings/site-settings.component";
import { ManageUsersComponent } from "../manage-users/manage-users.component";
import { AdminComponent } from "../admin/admin.component";


import { AdminFunctionsService } from "../admin-functions.service";

const routes: Routes = [{
    path: '', component: AdminComponent,
    children: [
        {
            path: 'manageusers',
            component: ManageUsersComponent
        },
        {
            path: 'sitesettings',
            component: SiteSettingsComponent
        },
        { path: '', redirectTo: '/admin/manageusers', pathMatch: 'full' },
        { path: '**', redirectTo: 'admin/manageusers', pathMatch: 'full' }]
}]

@NgModule({
    declarations: [
        AdminComponent,
        SiteSettingsComponent,
        ManageUsersComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        RouterModule.forChild(routes)
    ],
    providers: [AdminFunctionsService]
})
export class AdminModule { }
