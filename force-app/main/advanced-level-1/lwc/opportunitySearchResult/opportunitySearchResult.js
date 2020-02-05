import {LightningElement, track, wire} from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener, unregisterAllListeners} from 'c/pubsub';

export default class OpportunitySearchResult extends LightningElement {
  searchKey = '';
  @track opportunities;
  @track error;

  @wire(CurrentPageReference) pageRef;

  connectedCallback() {
    // subscribe to searchKeyChange event
    registerListener('searchResultChange', this.handleSearchResultChange, this);
    registerListener(
      'searchResultChangeError',
      this.handleSearchResultChangeError,
      this
    );
  }

  disconnectedCallback() {
    // unsubscribe from searchKeyChange event
    unregisterAllListeners(this);
  }

  handleSearchResultChange(opportunities) {
    this.opportunities = opportunities;
  }

  handleSearchResultChangeError(error) {
    this.error = error;
  }
}
