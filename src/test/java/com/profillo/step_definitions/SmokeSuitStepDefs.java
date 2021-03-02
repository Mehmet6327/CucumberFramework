package com.profillo.step_definitions;


import com.profillo.pages.LibrarianPage;
import com.profillo.utilities.BrowserUtils;
import com.profillo.utilities.Driver;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class SmokeSuitStepDefs {





    @Then("Book Management page should be opened")
    public void book_Management_page_should_be_opened() {
        Assert.assertEquals( "http://library3.cybertekschool.com/#books", Driver.get().getCurrentUrl() );
        BrowserUtils.waitFor(2);
    }

    @Then("the user should be able to click to Edit Book button")
    public void the_user_should_be_able_to_click_to_Edit_Book_button() {
        BrowserUtils.waitFor( 3 );
        LibrarianPage bookBtn= new LibrarianPage();
        bookBtn.editBookButton.click();
    }

    @Then("Edit Book Information window should be opened")
    public void edit_Book_Information_window_should_be_opened() {
        BrowserUtils.waitFor( 3 );
        LibrarianPage window = new LibrarianPage();
        BrowserUtils.waitFor( 3 );
        String a = "Edit Book Information";

        Assert.assertEquals(a, window.EditBookInfo.getText());
    }



}
