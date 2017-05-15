import { SessionService } from '../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { Url } from "app/core/helpers/url";

@Component({
    moduleId: module.id,
    selector: 'aasi-header',
    templateUrl: 'header.component.html',
    styles: ['app-header', 'navbar']
})
export class HeaderComponent implements OnInit {
    public UserName: string;
    public  url = new Url();

    constructor(public ss:SessionService
        ) {

    } 

    ngOnInit() {
 
        //  this.ss.currentLegalEntity.subscribe(i=> {console.log('new current legalentity', i)});
        //this.us.getUser().subscribe(p => { this.UserName = p as string; });
    }
    public getLogOutAddress(): string {
        return this.url.GetCurrentSiteUrl() + '/RenderForms/LogOut.aspx?response=' + this.url.appIndex;
    }

    public getUserInfoAddress(): string {
        return this.url.GetCurrentSiteUrl() + '/RenderForms/AccountInfo.aspx?response=' + this.url.appIndex;
    }

    public getAppRootAddress(): string{
        return this.url.GetCurrentSiteUrl() + this.url.appIndex;
    }
}