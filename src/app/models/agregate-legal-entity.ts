import { LegalEntityLite } from '../models/legal-entity-lite';
export class AgregateLegalEntity
{
    LegalEntityId:number;
    LegalEntityLite : LegalEntityLite; 

	constructor(param:any) {
        this.LegalEntityId =  param.LegalEntityId;
        this.LegalEntityLite = param.LegalEntityLite;
	}
    
}