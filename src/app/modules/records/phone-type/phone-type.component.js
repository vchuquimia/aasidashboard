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
var phone_type_1 = require('../../models/phone-type');
var router_1 = require('@angular/router');
var PhoneTypeComponent = (function () {
    function PhoneTypeComponent(phoneTypeService, router, routerActive) {
        this.phoneTypeService = phoneTypeService;
        this.router = router;
        this.routerActive = routerActive;
        this.phoneTypeId = 0;
        this.selectedPhoneType = new phone_type_1.PhoneType({});
    }
    PhoneTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.params.subscribe(function (params) {
            var id = params['phoneTypeId'];
            _this.GetPhoneType(id);
        });
    };
    PhoneTypeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.phoneTypeService.SavePhoneType(this.selectedPhoneType)
            .subscribe(function (p) { _this.router.navigateByUrl("/search-phone-type"); });
    };
    PhoneTypeComponent.prototype.GetPhoneType = function (phoneTypeId) {
        var _this = this;
        if (phoneTypeId > 0) {
            this.phoneTypeService.GetPhoneTypeById(phoneTypeId)
                .subscribe(function (p) {
                _this.selectedPhoneType = p;
                _this.phoneTypeId = _this.selectedPhoneType.Id;
            });
        }
        else {
            this.selectedPhoneType = new phone_type_1.PhoneType({});
        }
    };
    PhoneTypeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'phone-type',
            templateUrl: 'phone-type.component.html'
        }), 
        __metadata('design:paramtypes', [phone_type_service_1.PhoneTypeService, router_1.Router, router_1.ActivatedRoute])
    ], PhoneTypeComponent);
    return PhoneTypeComponent;
}());
exports.PhoneTypeComponent = PhoneTypeComponent;
//# sourceMappingURL=phone-type.component.js.map