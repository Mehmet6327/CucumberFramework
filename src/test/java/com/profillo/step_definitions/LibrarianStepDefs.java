package com.profillo.step_definitions;


import com.profillo.utilities.BrowserUtils;
import com.profillo.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;





public class LibrarianStepDefs {

    @Given("user clicks on books module")
    public void user_clicks_on_books_module() {
        BrowserUtils.waitFor( 3 );
        Driver.get().findElement(By.xpath("(//span[@class='title'])[3]")).click();

    }

    @Given("user clicks on edit book button")
    public void user_clicks_on_edit_book_button() {
        BrowserUtils.waitFor( 3 );
        Driver.get().findElement(By.xpath("//a[contains(@class,'btn btn-primary')]")).click();

    }

    @When("user fills each component in edit window")
    public void user_fills_each_component_in_edit_window() {
        BrowserUtils.waitFor( 3 );
        Driver.get().findElement(By.name("name")).sendKeys("abc");
        Driver.get().findElement(By.xpath("//input[@name='author']")).sendKeys("abc");
        Driver.get().findElement(By.name("year")).sendKeys("1999");

    }

    @When("user clicks on save changes button")
    public void user_clicks_on_save_changes_button() {

        BrowserUtils.waitFor(3);
        Driver.get().findElement(By.xpath("//button[@class='btn btn-primary']")).click();
    }

    @Then("New changes will appear on book management page")
    public void new_changes_will_appear_on_book_managament_page() {
        BrowserUtils.waitFor(2);
        Assert.assertTrue(Driver.get().findElement(By.xpath("//div[@class='toast toast-success']")).isDisplayed());



    }



}
