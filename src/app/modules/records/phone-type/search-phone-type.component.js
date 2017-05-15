"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var phone_type_service_1 = require('../../services/phone-type.service');
var SearchPhoneTypeComponent = (function () {
    function SearchPhoneTypeComponent(phoneTypeService) {
        this.phoneTypeService = phoneTypeService;
    }
    SearchPhoneTypeComponent.prototype.GetAllPhoneTypes = function () {
        var _this = this;
        this.phoneTypeService.GetPhoneTypes().subscribe(function (p) {
            _this.phoneTypeList = p;
        });
    };
    SearchPhoneTypeComponent.prototype.DeletePhoneType = function (phoneTypeId) {
        var _this = this;
        this.phoneTypeService.DeletePhoneType(phoneTypeId)
            .subscribe(function (p) { _this.GetAllPhoneTypes(); });
    };
    SearchPhoneTypeComponent.prototype.ngOnInit = function () {
        this.GetAllPhoneTypes();
    };
    SearchPhoneTypeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-phone-type',
            templateUrl: 'search-phone-type.component.html'
        }), 
        __metadata('design:paramtypes', [phone_type_service_1.PhoneTypeService])
    ], SearchPhoneTypeComponent);
    return SearchPhoneTypeComponent;
}());
exports.SearchPhoneTypeComponent = SearchPhoneTypeComponent;
//# sourceMappingURL=search-phone-type.component.js.map