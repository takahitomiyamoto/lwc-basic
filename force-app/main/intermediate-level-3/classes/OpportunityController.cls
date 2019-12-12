public with sharing class OpportunityController {
  @AuraEnabled(cacheable=true)
  public static List<Opportunity> findOpportunities(String searchKey) {
    String key = '%' + searchKey + '%';
    return [
      SELECT Id, Name, Amount, StageName
      FROM Opportunity
      WHERE Name LIKE :key
      LIMIT 50000
    ];
  }
}
