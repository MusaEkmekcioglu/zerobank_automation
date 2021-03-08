$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddNewPayee.feature");
formatter.feature({
  "name": "add new payee under pay bills",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters valid username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.LoginStepDefs.the_user_enters_valid_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigates Online Banking - Pay Bills Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.PayBillsStepDefs.the_user_navigates_Online_Banking_Pay_Bills_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Add a new payee",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user accesses the Add New Payee tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.AddNewPayeeStepDefs.the_user_accesses_the_Add_New_Payee_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "creates new payee using following information",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/FindTransactions.feature");
formatter.feature({
  "name": "Find Transactions in Account Activity",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user accesses the Find Transactions tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.the_user_accesses_the_Find_Transactions_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "4- Type",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "clicks search",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show \"at least one\" result under \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.resultsTableShouldShowResultUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show \"at least one\" result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.resultsTableShouldShowResultUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects type \"Deposit\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.userSelectsType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show \"at least one\" result under \"Deposit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.resultsTableShouldShowResultUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show \"no\" result under \"Withdrawal\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.resultsTableShouldShowResultUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects type \"Withdrawal\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.userSelectsType(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks search",
  "keyword": "When "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.clicks_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show \"at least one\" result under \"Withdrawal\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.resultsTableShouldShowResultUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "results table should show \"no\" result under \"Deposit\"",
  "keyword": "But "
});
formatter.match({
  "location": "com.zerobank.stepdefinitions.FindTransactionsStepDefs.resultsTableShouldShowResultUnder(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});