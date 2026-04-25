Feature: Navigation

  @KAN-7
  Scenario: Navbar is visible on the home page
    Given I open the home page
    Then the navbar is visible

  @KAN-8
  Scenario: Navigate to About page via navbar
    Given I open the home page
    When I click the "About" link in the navbar
    Then I am on the "/about" page

  @KAN-9
  Scenario: Navigate to Portfolio page via navbar
    Given I open the home page
    When I click the "Translated books" link in the navbar
    Then I am on the "/portfolio" page

  @KAN-10
  Scenario: Navigate to Events page via navbar
    Given I open the home page
    When I click the "Events" link in the navbar
    Then I am on the "/events" page

  @KAN-11
  Scenario: Navigate to Contact page via navbar
    Given I open the home page
    When I click the "Contact" link in the navbar
    Then I am on the "/contact" page

  @KAN-12
  Scenario: Footer is visible on the home page
    Given I open the home page
    Then the footer is visible

  @KAN-13
  Scenario: Unknown URL shows 404 page
    Given I navigate to "/this-page-does-not-exist"
    Then a 404 message is visible
