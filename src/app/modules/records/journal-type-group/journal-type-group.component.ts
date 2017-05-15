import { JournalType } from '../../../models/records/journal-type';
import { JournalTypeGroupItemService } from '../../../services/records/journal-type-group-item.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { JournalTypeGroup } from '../../../models/records/journal-type-group';
import { JournalTypeService } from '../../../services/records/journal-type.service'; 
import { JournalTypeGroupService } from '../../../services/records/journal-type-group.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../services/session.service';
import {List} from '../../../core/helpers/linq'


@Component({
    moduleId: module.id,
    selector: 'journal-type-group',
    templateUrl: 'journal-type-group.component.html',
     styles: ['.formatCode{padding-left: 6px;}; .table-list th, .tr-list { text-align: start;} .tr-list {border: 1px solid #eaeff0; display: table-row;line-height: 2;} .table-list { margin-bottom: 1rem;}']})

export class JournalTypeGroupComponent implements OnInit 
{
    public journalTypeGroups : Array<JournalTypeGroup>;
    public selectedJournalTypeGroup : JournalTypeGroup;
    public JournalTypeList : Array<JournalType>;
    public JournalTypeGroupListItem : Array<JournalType>;
    public JournalTypeGroupListItemCopy : Array<JournalType>;
    public JournalTypeGroupListItemSave : Array<JournalType>;
    public JournalTypeGroupListItemDelete : Array<JournalType>;
    constructor(public journalTypeGroupService: JournalTypeGroupService,
                private routerActive: ActivatedRoute,
                private router: Router,
                private ss: SessionService,
                private jtService: JournalTypeService,
                private journalTypeGroupItemService: JournalTypeGroupItemService) 
    {
        this.selectedJournalTypeGroup = new JournalTypeGroup({});
        this.JournalTypeGroupListItemDelete = new Array<JournalType>();
        this.JournalTypeGroupListItemSave = new Array<JournalType>();
    }

    public getJournalTypeGroup(journalTypeGroupId : number)
    {
        if(journalTypeGroupId > 0)
        {    
            this.journalTypeGroupService.getJournalTypeGroupById(journalTypeGroupId).subscribe(p => {
            this.selectedJournalTypeGroup = p;
            this.journalTypeGroupItemService.GetUsedJournalType(this.selectedJournalTypeGroup.Id).subscribe(t =>{

                this.JournalTypeGroupListItem = t;
                 this.JournalTypeGroupListItemCopy = this.JournalTypeGroupListItem.slice();  
            })
            }); 

        }  
        else
        {
            this.selectedJournalTypeGroup = new JournalTypeGroup({
            })
            this.JournalTypeGroupListItem = new Array<JournalType>();
             this.JournalTypeGroupListItemCopy = this.JournalTypeGroupListItem.slice(); 
        }
    }

    ngOnInit() 
    { 
        this.routerActive.params.subscribe(params => {
        let id = params['JournalTypeGroupId'] as number;
        this.getJournalTypeGroup(id);
        this.UploadJournalType(id);
        });
        

    }
    public UploadJournalType(id : number){
     this.journalTypeGroupItemService.GetAvailableJournalType(id).subscribe(
         r =>{
            this.JournalTypeList = r; 
         }
     )

    }
   public selectJT(jt: JournalType)
   {
       var jtPosition = (this.JournalTypeList.indexOf(jt));
       this.JournalTypeList.splice(jtPosition, 1);
       this.JournalTypeGroupListItem.push(jt);
   }
   public unselectJT(jt: JournalType)
   {
       var jtgPosition = (this.JournalTypeGroupListItem.indexOf(jt));
     this.JournalTypeGroupListItem.splice(jtgPosition, 1);
       this.JournalTypeList.push(jt);
   }
   public selectAllJT()
   {
      this.JournalTypeGroupListItem =  this.JournalTypeGroupListItem.concat(this.JournalTypeList);
         this.JournalTypeList = new Array<JournalType>();
   }
   public unselectAllJT()
   {
       this.JournalTypeList = this.JournalTypeList.concat(this.JournalTypeGroupListItem);
         this.JournalTypeGroupListItem = new Array<JournalType>();
   }
   public validateChangeJournalType(jt: JournalType, jtList :Array<JournalType>):boolean
   {
       for(let o of jtList)
       {
           if(o.Id == jt.Id)
           {
            return true;
           }
       }
    return false;
   }
   public DeleteJournalTypeGroup()
   {
      for(let i of this.JournalTypeGroupListItemCopy){

          if ( !this.validateChangeJournalType(i,this.JournalTypeGroupListItem))
          {
         this.JournalTypeGroupListItemDelete.push(i);
          }
    }
     
   }
      public AddNewJournalTypeGroupItem()
   {
      for(let i of this.JournalTypeGroupListItem){

          if ( !this.validateChangeJournalType(i,this.JournalTypeGroupListItemCopy))
          {
         this.JournalTypeGroupListItemSave.push(i);
          }
    }
   }
  public ConvertArrayObjectToStringIds(listjt:Array<JournalType>):string
   {
     
       var jtList = new List<JournalType>(listjt).Select(j => j.Id);
       return jtList.ToArray().toString();
   }

   public onSubmit() 
    {
        this.journalTypeGroupService.saveJournalTypeGroup(this.selectedJournalTypeGroup).subscribe(
        p =>{
          this.DeleteJournalTypeGroup();
          this.AddNewJournalTypeGroupItem();

          var jtgiStringSave = this.ConvertArrayObjectToStringIds(this.JournalTypeGroupListItemSave);
          var jtgiStringDelete = this.ConvertArrayObjectToStringIds(this.JournalTypeGroupListItemDelete);
            this.journalTypeGroupItemService.save(jtgiStringSave,jtgiStringDelete,p.Id ).subscribe(
               j => {
                     this.router.navigateByUrl("/search-journal-type-group");
              });
            
});
    }
       
}