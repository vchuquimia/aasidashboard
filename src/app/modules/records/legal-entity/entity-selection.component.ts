import { APP_CONSTANTS } from '../../../app.constants';
import { LocalStorage } from '../../../core/helpers/local-storage';
import { CanActivateViaEntitySelectionGuard } from '../../../common/guards/can-activate-via-entity-selection.guard';
import { Router } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { LegalEntityService } from '../../../services/records/legal-entity.service';
import { LegalEntityLite } from '../../../models/legal-entity-lite';

import { Observable } from 'rxjs/Rx';
//import { MenuComponent } from '../../shared/sidebar/menu.component';
@Component({
    moduleId: module.id,
    selector: 'entity-selection',
    templateUrl: 'entity-selection.component.html'//,
  //  providers: [MenuComponent]
})

export class EntitySelectionComponent implements OnInit {
 //  public Academic : boolean = true;
    // @Output() eAcademic = new EventEmitter<boolean>();
    // @Input() Academic: boolean ;

    //public entityService: EntityService;
    public entities: Array<LegalEntityLite>;
    public selectedEntity: LegalEntityLite;

    errorMessage: String;

    constructor(public entityService: LegalEntityService, private router: Router, private ss: SessionService,
    public entityGuard: CanActivateViaEntitySelectionGuard) {
        //this.entityService = EntityService;
        

        //this.ss.currentLegalEntity.subscribe(o=>{console.log('entity', o)});
    }

    public getAccountingEntities() {

        this.entityService.getAccountingEntities()
            .subscribe(p => {
                this.entities = p as Array<LegalEntityLite>;

            }
            , e => this.errorMessage = e
            );
    }

    public setAccountingEntity(entity: LegalEntityLite) {

        this.entityService.setAccountingEntity(entity.Id).subscribe(
            (e: LegalEntityLite) => {
                this.selectedEntity = e;
                this.ss.currentLegalEntity.next(e);
                this.entityGuard.backToGuardedRoute();
                LocalStorage.Set(APP_CONSTANTS.SESSION_KEY_LEGAL_ENTITY_ID, e.Id);
                //this.entityService.isSelectedEntityAnAcademy.next(e.)
                this.router.navigateByUrl('welcome');
            //   this.entityService.IsSelectedEntityAnAcademy()
            //    .subscribe(
            //         r =>
            //         {
            //             this.entityService.isSelectedEntityAnAcademy.next(r);
            //        });

              // this.conectMenu();
               
            }
        );
    }
    ngOnInit() { 
        this.getAccountingEntities();
    }

    //  public conectMenu(): void{
   

    //  } 

    //tests only
    public getCurrentEntity() {
        console.log('current entity', this.ss.currentLegalEntity.getValue());
    }
}