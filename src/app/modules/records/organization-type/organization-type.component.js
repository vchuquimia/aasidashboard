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
var organization_type_1 = require('../../models/organization-type');
var router_1 = require('@angular/router');
var OrganizationTypeComponent = (function () {
    function OrganizationTypeComponent(orgTypeService, router, routerActive) {
        this.orgTypeService = orgTypeService;
        this.router = router;
        this.routerActive = routerActive;
        this.organizationTypeId = 0;
        this.selectedOrganizationType = new organization_type_1.OrganizationType({});
    }
    OrganizationTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.params.subscribe(function (params) {
            var id = params['organizationTypeId'];
            _this.GetOrganizationType(id);
        });
    };
    OrganizationTypeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.orgTypeService.saveOrganizationType(this.selectedOrganizationType)
            .subscribe(function (p) { _this.router.navigateByUrl("/search-organization-type"); });
    };
    OrganizationTypeComponent.prototype.GetOrganizationType = function (orgTypeId) {
        var _this = this;
        if (orgTypeId > 0) {
            this.orgTypeService.getOrganizationTypeById(orgTypeId)
                .subscribe(function (p) {
                _this.selectedOrganizationType = p;
                _this.organizationTypeId = _this.selectedOrganizationType.Id;
            });
        }
        else {
            this.selectedOrganizationType = new organization_type_1.OrganizationType({});
        }
    };
    OrganizationTypeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'organization-type',
            templateUrl: 'organization-type.component.html'
        }), 
        __metadata('design:paramtypes', [organization_type_service_1.OrganizationTypeService, router_1.Router, router_1.ActivatedRoute])
    ], OrganizationTypeComponent);
    return OrganizationTypeComponent;
}());
exports.OrganizationTypeComponent = OrganizationTypeComponent;
//# sourceMappingURL=organization-type.component.js.map