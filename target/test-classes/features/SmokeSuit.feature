
Feature:

  Background:
		#@PROF-229
    Given the librarian logged in the application


  @PROF-250 @PROF-249
  Scenario: Edit Book Functionality for Smoke Suit
    When user clicks on books module
    Then Book Management page should be opened
    And the user should be able to click to Edit Book button
    Then Edit Book Information window should be opened