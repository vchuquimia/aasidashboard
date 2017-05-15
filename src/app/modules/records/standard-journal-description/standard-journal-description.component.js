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
var standard_journal_description_service_1 = require('../../services/standard-journal-description.service');
var standard_description_1 = require('../../models/standard-description');
var router_1 = require('@angular/router');
var StandardJournalDescriptionComponent = (function () {
    function StandardJournalDescriptionComponent(staDescriptionService, router, routerActive) {
        this.staDescriptionService = staDescriptionService;
        this.router = router;
        this.routerActive = routerActive;
        this.staDescriptionId = 0;
        this.selectedStandardDescription = new standard_description_1.StandardDescription({});
    }
    StandardJournalDescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerActive.params.subscribe(function (params) {
            var id = params['standardDescriptionId'];
            _this.GetStandardDescription(id);
        });
    };
    StandardJournalDescriptionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.staDescriptionService.SaveStandardDescription(this.selectedStandardDescription)
            .subscribe(function (p) { _this.router.navigateByUrl("/search-standard-journal-description"); });
    };
    StandardJournalDescriptionComponent.prototype.GetStandardDescription = function (staDescriptionId) {
        var _this = this;
        if (staDescriptionId > 0) {
            this.staDescriptionService.GetStandardDescriptionById(staDescriptionId)
                .subscribe(function (p) {
                _this.selectedStandardDescription = p;
                _this.staDescriptionId = _this.selectedStandardDescription.Id;
            });
        }
        else {
            this.selectedStandardDescription = new standard_description_1.StandardDescription({});
            this.selectedStandardDescription.LelgalEntityId = 2;
        }
    };
    StandardJournalDescriptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'standard-journal-description',
            templateUrl: 'standard-journal-description.component.html'
        }), 
        __metadata('design:paramtypes', [standard_journal_description_service_1.StandardJournalDescriptionService, router_1.Router, router_1.ActivatedRoute])
    ], StandardJournalDescriptionComponent);
    return StandardJournalDescriptionComponent;
}());
exports.StandardJournalDescriptionComponent = StandardJournalDescriptionComponent;
//# sourceMappingURL=standard-journal-description.component.js.map