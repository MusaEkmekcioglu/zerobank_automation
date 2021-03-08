Feature: add new payee under pay bills

  Background:
    Given the user is on the login page
    Then the user enters valid username and password
    Then the user navigates Online Banking - Pay Bills Page

  @wip
  Scenario: Add a new payee
    Given the user accesses the Add New Payee tab
    And creates new payee using following information
      | Payee Name    | The Law Offices of Hyde, Price & Scharks |
      | Payee Address | 100 Same st, Anytown, USA, 10001         |
      | Payee Account | Checking                                 |
      | Payee Details | XYZ account                              |
    Then message "The new payee The Law Offices of Hyde, Price & Scharks was successfully created." should be displayed