Feature: Fetching list of users 

Scenario: Load users on page load
    Given The ViewModel is an empty array or null
    When UserPresenter loads data from UserRepository
    Then The ViewModel updates, allowing me to see my lists of users