public with sharing class ContactController {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContacts(String accountId) {
    /**
     * Validate CRUD permission before SOQL/DML operation (rule: Security-ApexCRUDViolation)
     * See: https://pmd.github.io/latest/pmd_rules_apex_security.html#apexcrudviolation
     */
    // if (!Schema.sObjectType.Contact.isAccessible()) {
    //   return new List<Contact>();
    // }
    List<Contact> contacts = [
      SELECT Id, Name, Title
      FROM Contact
      WHERE AccountId = :accountId
      ORDER BY Name ASC
    ];
    return contacts;
  }
}
