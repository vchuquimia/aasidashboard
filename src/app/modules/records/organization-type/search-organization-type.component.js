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
var organization_type_service_1 = require('../../services/organization-type.service');
var SearchOrganizationTypeComponent = (function () {
    function SearchOrganizationTypeComponent(orgTypeService) {
        this.orgTypeService = orgTypeService;
    }
    SearchOrganizationTypeComponent.prototype.GetOrganizationTypes = function () {
        var _this = this;
        this.orgTypeService.GetOrganizationType().subscribe(function (p) {
            _this.orgTypeList = p;
        });
    };
    SearchOrganizationTypeComponent.prototype.DeleteOrganizationType = function (orgTypeId) {
        var _this = this;
        this.orgTypeService.deleteOrganizationType(orgTypeId)
            .subscribe(function (p) { _this.GetOrganizationTypes(); });
    };
    SearchOrganizationTypeComponent.prototype.ngOnInit = function () {
        this.GetOrganizationTypes();
    };
    SearchOrganizationTypeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-organization-type',
            templateUrl: 'search-organization-type.component.html'
        }), 
        __metadata('design:paramtypes', [organization_type_service_1.OrganizationTypeService])
    ], SearchOrganizationTypeComponent);
    return SearchOrganizationTypeComponent;
}());
exports.SearchOrganizationTypeComponent = SearchOrganizationTypeComponent;
//# sourceMappingURL=search-organization-type.component.js.map