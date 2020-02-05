import {LightningElement, track, wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';
import findOpportunities from '@salesforce/apex/OpportunityController.findOpportunities';

export default class ApexImperativeMethodWithParams extends LightningElement {
  label = {
    title: 'Opportunity Search',
    search: '検索',
    opportunityName: '商談名'
  };

  @track searchKey = '';
  @wire(CurrentPageReference) pageRef;

  handleKeyChange(event) {
    this.searchKey = event.target.value;
  }

  handleSearch() {
    findOpportunities({searchKey: this.searchKey})
      .then((result) => {
        fireEvent(this.pageRef, 'searchResultChange', result);
      })
      .catch((error) => {
        fireEvent(this.pageRef, 'searchResultChangeError', error);
      });
  }
}
