Feature: Kita Bisa Feature

  Scenario: As a User, I should be create donation
    Given user visit Kitabisa.com
    When I select any campaign and click Donasi Sekarang
    And I select amount as 10K and select payment method as Transfer BCA and enter any name and email id in the corresponding fields
    And I click Lanjutkan Pembayaran
    And I Click Kembali ke penggalangan
    And I click back arrow on the campaign
    Then I should back to Homepage Kita Bisa
