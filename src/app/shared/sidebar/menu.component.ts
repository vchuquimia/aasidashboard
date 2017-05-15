import { MenuGroup } from '../../common/models/menu-group.model';
import { MenuService } from '../../services/menu.service';
import { Component, ViewChild, OnInit, EventEmitter, Output, NgModule } from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  CommonModule
} from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'aasi-menu',
  templateUrl: 'menu.component.html',

})

export class MenuComponent implements OnInit {

  APP_MENU 
  constructor(private menuService: MenuService) {
  }

  public menu: Array<MenuGroup>;

  ngOnInit() { 
    this.menu = this.menuService.GetMenu();

  }

}