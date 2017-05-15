import { MenuGroup } from '../common/models/menu-group.model';
import { Injectable } from '@angular/core';
import { APP_MENU } from '../app.menu';
@Injectable()
export class MenuService {

    constructor() { }


    public GetMenu(): Array<MenuGroup>{
        return APP_MENU;
    }
}