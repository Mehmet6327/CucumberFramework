package com.profillo.step_definitions;



import com.profillo.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;

public class EditBookStepDefs {



    @Then("new changes will appear on book management page")
    public void new_changes_will_appear_on_book_management_page() {
        com.profillo.utilities.BrowserUtils.waitFor(3);
        Assert.assertTrue(Driver.get().findElement(By.xpath("//div[@class='toast toast-success']")).isDisplayed());
    }

}
