package com.zerobank.stepdefinitions;

import com.zerobank.pages.PayBillPage;
import com.zerobank.utilities.BrowserUtils;
import com.zerobank.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class PurchaseForeignCurrencyStepDefs {

    PayBillPage payBillPage = new PayBillPage();

    @Given("the user accesses the Purchase foreign currency cash tab")
    public void the_user_accesses_the_Add_New_Payee_tab() {
        payBillPage.purchaseForeignCurrencyTab.click();
    }


    @Then("following currencies should be available")
    public void followingCurrenciesShouldBeAvailable(List<String> expectedCurrencyList) {
        BrowserUtils.waitFor(2);
        Select selectCurrencyDropdown = new Select(payBillPage.selectCurrencyDropdownButton);
        List<String> actualList = BrowserUtils.getElementsText(selectCurrencyDropdown.getOptions());

        Assert.assertTrue(actualList.containsAll(expectedCurrencyList));

    }

    @When("user tries to calculate cost without selecting a currency")
    public void userTriesToCalculateCostWithoutSelectingACurrency() {
        BrowserUtils.waitFor(2);
        payBillPage.calculateCostsButton.click();

    }

    @Then("error message should be displayed")
    public void errorMessageShouldBeDisplayed() {
        BrowserUtils.waitFor(1);

        Alert alert = Driver.get().switchTo().alert();
        String actualAlertMessage = alert.getText();

        String expectedAlertMessage = "Please, ensure that you have filled all the required fields with valid values.";
        Assert.assertEquals(expectedAlertMessage, actualAlertMessage);

        alert.accept();
    }

    @When("user tries to calculate cost without entering a value")
    public void userTriesToCalculateCostWithoutEnteringAValue() {
        BrowserUtils.waitFor(2);
        Select selectCurrencyDropdown = new Select(payBillPage.selectCurrencyDropdownButton);

        selectCurrencyDropdown.selectByIndex(2);
        BrowserUtils.waitFor(2);
        payBillPage.calculateCostsButton.click();
    }
}
