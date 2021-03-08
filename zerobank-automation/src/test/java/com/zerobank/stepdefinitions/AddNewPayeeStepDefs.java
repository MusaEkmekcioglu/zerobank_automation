package com.zerobank.stepdefinitions;

import com.zerobank.pages.PayBillPage;
import com.zerobank.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.Map;

public class AddNewPayeeStepDefs {
    PayBillPage payBillPage = new PayBillPage();

    @Given("the user accesses the Add New Payee tab")
    public void the_user_accesses_the_Add_New_Payee_tab() {
        payBillPage.addNewPayeeTab.click();
    }

    @Given("creates new payee using following information")
    public void creates_new_payee_using_following_information(Map<String, String> infoList) {
        BrowserUtils.waitFor(2);
        payBillPage.payeeNameInputBox.sendKeys(infoList.get("Payee Name"));
        payBillPage.payeeAddressInputBox.sendKeys(infoList.get("Payee Address"));
        payBillPage.payeeAccountInputBox.sendKeys(infoList.get("Payee Account"));
        payBillPage.payeeDetailsInputBox.sendKeys(infoList.get("Payee Details"));
        BrowserUtils.waitFor(3);
        payBillPage.addNewPayeeButton.click();
    }

    @Then("message {string} should be displayed")
    public void messageTheNewPayeeShouldBeDisplayed(String expectedMessage) {
        String actualMessage = payBillPage.payeeAddedSuccessfulMessage.getText();
        Assert.assertEquals(expectedMessage,actualMessage);
        BrowserUtils.waitFor(3);
    }
}