
@wip
Feature: Edit book should have following parameters

  Background:
		#@PROF-229
    Given the librarian logged in the application

  @PROF-231
  Scenario: Librarian can edit books

    Given user clicks on books module
    And user clicks on edit book button
    When user fills each component in edit window
    And user clicks on save changes button
    Then New changes will appear on book management page


  @PROF-265
  Scenario: Edit book should have following parameters
    Given user clicks on books module
    Then user clicks on edit book button
    When user fills each component in edit window
    And user clicks on save changes button
    Then new changes will appear on book management page

  @PROF-266
  Scenario: ISBN Function
    Given user clicks on books module
    Then user clicks on edit book button
    When user clicks on ISBN box
    Then user enters ISBN data
  @PROF-267
  Scenario: Year Parameter Function
    When user clicks on books module
    And user clicks on edit book button
    And user clicks on Year box
    Then user enters Year data