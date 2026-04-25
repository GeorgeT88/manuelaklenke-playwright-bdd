Feature: Home page

  @KAN-4
  Scenario: Home page loads successfully
    Given I open the home page
    When the page is loaded
    Then the main content is visible
