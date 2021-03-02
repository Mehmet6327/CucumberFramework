package com.profillo.pages;


import com.profillo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LibrarianPage extends BasePage{

    public LibrarianPage(){
        PageFactory.initElements( Driver.get(), this);

    }

    @FindBy(xpath="//span[text()='Books']")
    public WebElement booksModule;
    @FindBy(xpath="(//a[contains(@class,'btn btn-primary')])[1]")
    public WebElement editBookButton;
    @FindBy(id = "book_group_id")
    public WebElement bookCategoryDropdown;
    @FindBy(tagName = "h5")
    public WebElement EditBookInfo;




}


