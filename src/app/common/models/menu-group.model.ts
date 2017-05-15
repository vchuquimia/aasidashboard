import { MenuItem } from './menu-item.model';


export class MenuGroup {
  DisplayName: string;
  Items: Array < MenuItem > ;
  constructor(displayName: string) {
    this.DisplayName = displayName;
    this.Items = new Array<MenuItem>();
  }
}