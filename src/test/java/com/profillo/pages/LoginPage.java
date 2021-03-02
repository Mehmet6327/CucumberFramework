package com.profillo.pages;


import com.profillo.utilities.ConfigurationReader;
import com.profillo.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(tagName = "button")
    public WebElement signIN;
    @FindBy(id = "inputEmail")
    public WebElement emailAdress;
    @FindBy(id = "inputPassword")
    public WebElement lpPassword;
    String Username = ConfigurationReader.get("librarian_username");
    String Password = ConfigurationReader.get("librarian_password");

    public void login() {
        emailAdress.sendKeys(Username);
        lpPassword.sendKeys(Password);
        signIN.click();
    }
}