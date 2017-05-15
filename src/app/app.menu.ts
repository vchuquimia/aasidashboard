import { MenuItem } from './common/models/menu-item.model';
import { MenuGroup } from './common/models/menu-group.model';




var RECORDS_MENU_GROUP = new MenuGroup('Records');
RECORDS_MENU_GROUP.Items.push(new MenuItem('Account Maintenance', 'fa-area-chart', '/records/search-account'))
RECORDS_MENU_GROUP.Items.push(new MenuItem('1099 Distribution Code', 'fa-area-chart', '/records/search-distribution-code'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('1099 Clasification Code', 'fa-area-chart', '/records/search-clasification-code'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Sub Account Type', 'fa-area-chart', '/records/search-sub-account-type'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Function Maintenance', 'fa-area-chart', '/records/search-function-maintenance'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Area', 'fa-area-chart', '/records/search-area'))
RECORDS_MENU_GROUP.Items.push(new MenuItem('Bank', 'fa-area-chart', '/records/search-bank'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Payment Method', 'fa-area-chart', '/records/search-payment-type'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('District', 'fa-area-chart', '/records/search-district'))
RECORDS_MENU_GROUP.Items.push(new MenuItem('Bank Info Type', 'fa-area-chart', '/records/search-bank-info-type'))
RECORDS_MENU_GROUP.Items.push(new MenuItem('Student Degree', 'fa fa-graduation-cap', '/records/search-student-degree'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Journal Type', 'fa-area-chart', '/records/search-journal-type'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Phone Type', 'fa-area-chart', '/records/search-phone-type'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Journal Type Group', 'fa-area-chart', '/records/search-journal-type-group'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Organization Type', 'fa-area-chart', '/records/search-organization-type'));
// RECORDS_MENU_GROUP.Items.push(new MenuItem('Exchange Rate', 'fa-area-chart', '/records/search-exchange-rate'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Currency', 'fa-area-chart', '/records/search-currency')); 
// RECORDS_MENU_GROUP.Items.push(new MenuItem('My DatePicker', 'fa fa-calendar', '/my-date-picker'));
RECORDS_MENU_GROUP.Items.push(new MenuItem('Standard Journal Description', 'fa-area-chart', '/records/search-standard-journal-description'));


export var APP_MENU: Array < MenuGroup > = [
RECORDS_MENU_GROUP

]