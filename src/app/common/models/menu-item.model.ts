export class MenuItem {
  DisplayName: string;
  IconClass: string;
  RouterLink: string;

  constructor(displayName: string, iconClass: string, routerLink: string) {
    this.DisplayName = displayName;
    this.IconClass = iconClass;
    this.RouterLink = routerLink;
  }
}