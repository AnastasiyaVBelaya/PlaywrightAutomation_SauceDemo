//Playwright: page.getByRole()
this.page.getByRole('combobox')
//searching here: https://www.saucedemo.com/cart.html
this.page.getByRole('button', {name: 'Checkout'})
this.page.getByRole('button', {name: 'Go back Continue Shopping'})
//searching here: https://www.saucedemo.com/checkout-step-two.html
this.page.getByRole('button', {name: 'Finish'})
//searching here: https://www.saucedemo.com/checkout-complete.html
this.page.getByRole('button', {name: 'Back Home'})

//Playwright: page.getByText()
//searching here: https://www.saucedemo.com/checkout-step-two.html
this.page.getByText('Checkout: Overview')
this.page.getByText('Payment Information:')
this.page.getByText('Shipping Information:')
this.page.getByText('Price Total')
this.page.getByText('Item total:')

//Playwright: page.getByLabel()
//not found

//Playwright: page.getByPlaceholder()
//searching here: https://www.saucedemo.com/checkout-step-one.html
this.page.getByPlaceholder('First Name')
this.page.getByPlaceholder('Last Name')
this.page.getByPlaceholder('Zip/Postal Code')
//searching here: https://www.saucedemo.com/
this.page.getByPlaceholder('Username')
this.page.getByPlaceholder('Password')

//Playwright: page.getByAltText()
this.page.getByAltText('Sauce Labs Backpack')
this.page.getByAltText('Sauce Labs Bolt T-Shirt')
this.page.getByAltText('Sauce Labs Onesie')
this.page.getByAltText('Sauce Labs Bike Light')
this.page.getByAltText('Sauce Labs Fleece Jacket')

//Playwright: page.getByTitle()
//not found

//Playwright: page.getByTestId()
/*
testIdAttribute: 'data-test' is preconfigured in playwright.config.ts

import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    testIdAttribute: 'data-test'
  }
});
*/
this.page.getByTestId('shopping-cart-link')
this.page.getByTestId('shopping-cart-badge')
this.page.getByTestId('title')
this.page.getByTestId('add-to-cart-sauce-labs-bike-light')
this.page.getByTestId('remove-sauce-labs-backpack')


//CSS, basic selector types
//#id
this.page.locator('#react-burger-menu-btn')
//class
this.page.locator('.product_sort_container')
//attribute="value"
this.page.locator('[href="https://twitter.com/saucelabs"]')
//tag
this.page.locator('nav')
//* — any elements
this.page.locator('nav *')


//CSS, relationships selector types:
//descendant
this.page.locator('.inventory_list .inventory_item_price')
this.page.locator('.inventory_list .inventory_item_desc')
//child
this.page.locator('.inventory_list > .inventory_item')
//adjacent sibling
this.page.locator('.inventory_item_img + .inventory_item_description')
//general sibling
this.page.locator('.inventory_item ~ .inventory_item')


//CSS, filter by position among siblings with same tag:
//searching here: https://www.saucedemo.com/checkout-step-one.html
//:first-of-type
this.page.locator('button:first-of-type')
//:last-of-type
this.page.locator('input:last-of-type')
//:only-of-type
this.page.locator('input:only-of-type')
//:nth-of-type(1)
this.page.locator('button:nth-of-type(1)')
//:nth-last-of-type(1)
this.page.locator('input:nth-last-of-type(1)')


//CSS, filter by position among siblings:
//:first-child
this.page.locator('.inventory_item:first-child')
//:last-child
this.page.locator('.inventory_item:last-child')
//:nth-child(2n)
this.page.locator('.inventory_item:nth-child(2n)')
//:only-child
this.page.locator('.shopping_cart_badge:only-child')
//:nth-last-child(3)
this.page.locator('.inventory_item:nth-last-child(3)')


//XPath: simple
//tag
this.page.locator('//nav')
this.page.locator('//footer')
this.page.locator('//select')
//searching here: https://www.saucedemo.com/checkout-step-one.html
this.page.locator('//form')
this.page.locator('//input') 

//XPath: simple
//tag[@attr="value"]
this.page.locator('//button[@name="add-to-cart-sauce-labs-backpack"]')
this.page.locator('//button[@id="react-burger-menu-btn"]')
this.page.locator('//img[@alt="Sauce Labs Onesie"]')
//searching here: https://www.saucedemo.com/checkout-step-one.html
this.page.locator('//input[@name="firstName"]')
this.page.locator('//input[@name="continue"]')

//XPath: simple
//tag[text()="value"]
this.page.locator('//button[text()="Open Menu"]')
this.page.locator('//a[text()="Twitter"]')
this.page.locator('//option[text()="Price (low to high)"]')
this.page.locator('//a[text()="Facebook"]')
this.page.locator('//a[text()="LinkedIn"]')

//XPath: simple
//tag[contains(@attr, "value")]
this.page.locator('//button[contains(@id, "burger-menu")]')
this.page.locator('//button[contains(@id, "cross")]')
this.page.locator('//select[contains(@data-test, "sort")]')
this.page.locator('//img[contains(@alt, "Bike Light")]')
this.page.locator('//a[contains(@href, "twitter")]')

//XPath: simple
//searching here: https://www.saucedemo.com/checkout-step-two.html
//tag[contains(text(), "value")]
this.page.locator('//button[contains(text(), "Finish")]')
this.page.locator('//div[contains(text(), "Payment Information")]')
this.page.locator('//div[contains(text(), "Shipping Information")]')
this.page.locator('//div[contains(text(), "Price Total")]')
this.page.locator('//div[contains(text(), "Item total")]')


//XPath Axes
//ancestor::
this.page.locator('//option[text()="Price (low to high)"]/ancestor::select')
this.page.locator('//img[@alt="Sauce Labs Bolt T-Shirt"]/ancestor::div[@class="inventory_item"]')
this.page.locator('//a[text()="LinkedIn"]/ancestor::li[@class="social_linkedin"]')

//ancestor-or-self::
this.page.locator('//select/ancestor-or-self::*[contains(@class, "header_container")]')
this.page.locator('//a[text()="Facebook"]/ancestor-or-self::*[@rel]')
this.page.locator('//div[contains(text(), "Sly Pack")]/ancestor-or-self::div[@class="inventory_item"]')

//attribute::
this.page.locator('//button[@id="react-burger-menu-btn"]/attribute::type')
this.page.locator('//button[@id="react-burger-cross-btn"]/attribute::type')
this.page.locator('//select/attribute::data-test')

//child::
this.page.locator('//nav/child::a[@id="inventory_sidebar_link"]')
this.page.locator('//nav/child::a[@id="logout_sidebar_link"]')
this.page.locator('//ul[@class="social"]/child::li[@class="social_twitter"]')

//descendant::
this.page.locator('//div[@class="inventory_item"][1]/descendant::img')
this.page.locator('//div[@class="inventory_item"][2]/descendant::div[@class="inventory_item_price"]')
this.page.locator('//footer/descendant::a[contains(@href, "linkedin")]')

//descendant-or-self::
this.page.locator('//nav/descendant-or-self::a[@data-test="logout-sidebar-link"]')
this.page.locator('//footer/descendant-or-self::div[@data-test="footer-copy"]')
this.page.locator('//select/descendant-or-self::option[@value="lohi"]')

//following::
this.page.locator('//button[@id="react-burger-menu-btn"]/following::footer')
this.page.locator('//span[@data-test="title"]/following::div[@class="inventory_list"]')
this.page.locator('//div[@class="inventory_item"][1]/following::img[@alt="Sauce Labs Bike Light"]')

//following-sibling::
this.page.locator('//li[@class="social_twitter"]/following-sibling::li[@class="social_facebook"]')
this.page.locator('//li[@class="social_facebook"]/following-sibling::li[@class="social_linkedin"]')
this.page.locator('//a[@id="item_4_title_link"]/following-sibling::div[@class="inventory_item_desc"]')

//parent::
this.page.locator('//select/parent::span')
this.page.locator('//a[text()="Twitter"]/parent::li')
this.page.locator('//img[@alt="Sauce Labs Onesie"]/parent::a')

//preceding::
this.page.locator('//footer/preceding::div[@class="inventory_list"]')
this.page.locator('//div[@class="footer_copy"]/preceding::ul[@class="social"]')
this.page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]/preceding::div[@class="inventory_item_price"]')

//preceding-sibling::
this.page.locator('//li[@class="social_facebook"]/preceding-sibling::li[@class="social_twitter"]')
this.page.locator('//li[@class="social_linkedin"]/preceding-sibling::li[@class="social_facebook"]')
this.page.locator('//button[@name="remove-sauce-labs-fleece-jacket"]/preceding-sibling::div[@class="inventory_item_price"]')

//self::
this.page.locator('//select/self::select')
this.page.locator('//nav/self::nav')
this.page.locator('//footer/self::footer')