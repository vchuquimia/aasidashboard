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
var SearchStandardJournalDescriptionComponent = (function () {
    function SearchStandardJournalDescriptionComponent(standardDescriptionService) {
        this.standardDescriptionService = standardDescriptionService;
    }
    SearchStandardJournalDescriptionComponent.prototype.GetAllStandardDescription = function () {
        var _this = this;
        this.standardDescriptionService.GetAllStandardDescription().subscribe(function (p) {
            _this.standardDescriptionList = p;
        });
    };
    SearchStandardJournalDescriptionComponent.prototype.DeleteStandardDescription = function (staId) {
        var _this = this;
        this.standardDescriptionService.DeleteStandardDescription(staId)
            .subscribe(function (p) { _this.GetAllStandardDescription(); });
    };
    SearchStandardJournalDescriptionComponent.prototype.ngOnInit = function () {
        this.GetAllStandardDescription();
    };
    SearchStandardJournalDescriptionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-standard-journal-description',
            templateUrl: 'search-standard-journal-description.component.html'
        }), 
        __metadata('design:paramtypes', [standard_journal_description_service_1.StandardJournalDescriptionService])
    ], SearchStandardJournalDescriptionComponent);
    return SearchStandardJournalDescriptionComponent;
}());
exports.SearchStandardJournalDescriptionComponent = SearchStandardJournalDescriptionComponent;
//# sourceMappingURL=search-standard-journal-description.component.js.map