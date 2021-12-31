$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("onlineshopping.feature");
formatter.feature({
  "line": 1,
  "name": "SignUp, Sign In and Purchase Product",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8882767100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "TC-001 Create New User/SignUp",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-001-create-new-user/signup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to SignUp page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "create an account with random username",
  "rows": [
    {
      "cells": [
        "krishna",
        "Patel",
        "abc12456",
        "123 Abc Street",
        "London",
        "Florida",
        "12345",
        "01234567890"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 162472000,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.navigateToSignUpPage()"
});
formatter.result({
  "duration": 1638297600,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.createAnAccountWithRandomUsername(DataTable)"
});
formatter.result({
  "duration": 2668937300,
  "status": "passed"
});
formatter.after({
  "duration": 1209870000,
  "status": "passed"
});
formatter.before({
  "duration": 5837129000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "TC-002 Sign In with newly created user credentials",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-002-sign-in-with-newly-created-user-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I shall verify the address information in my address section",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 1517043600,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 1509997100,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.iShallVerifyTheAddressInformationInMyAddressSection()"
});
formatter.result({
  "duration": 1005862900,
  "status": "passed"
});
formatter.after({
  "duration": 1198633100,
  "status": "passed"
});
formatter.before({
  "duration": 4767092100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "TC-003 Add product to Online Cart and checkout",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-003-add-product-to-online-cart-and-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I add below product to cart",
  "rows": [
    {
      "cells": [
        "category",
        "subCategory",
        "name",
        "model",
        "quantity"
      ],
      "line": 21
    },
    {
      "cells": [
        "Dresses",
        "CASUAL DRESSES",
        "Printed Dress",
        "demo_3",
        "2"
      ],
      "line": 22
    },
    {
      "cells": [
        "Women",
        "TOPS",
        "Faded Short Sleeve T-shirts",
        "demo_1",
        "3"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I shall validate shopping cart as below",
  "rows": [
    {
      "cells": [
        "name",
        "model",
        "quantity"
      ],
      "line": 25
    },
    {
      "cells": [
        "Printed Dress",
        "SKU : demo_3",
        "2"
      ],
      "line": 26
    },
    {
      "cells": [
        "Faded Short Sleeve T-shirts",
        "SKU : demo_1",
        "3"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I shall be able to Buy the product",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I shall be able to Buy using cheque payment",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 1432454200,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 1655139600,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.iAddBelowProductToCart(DataTable)"
});
formatter.result({
  "duration": 10438099900,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.iShallValidateShoppingCartAsBelow(DataTable)"
});
formatter.result({
  "duration": 2732491500,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.iShallBeAbleToBuyTheProduct()"
});
formatter.result({
  "duration": 7090254600,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.iShallBeAbleToBuyUsingChequePayment()"
});
formatter.result({
  "duration": 33798100,
  "status": "passed"
});
formatter.after({
  "duration": 944410900,
  "status": "passed"
});
formatter.before({
  "duration": 5293700600,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TC-004 Contact customer service for the previous successful order",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-004-contact-customer-service-for-the-previous-successful-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I am on the contact page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I send refund request to customer care for previous order",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 2101721800,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 2217756500,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.iAmOnTheContactPage()"
});
formatter.result({
  "duration": 9083567300,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingSteps.iSendRefundRequestToCustomerCareForPreviousOrder()"
});
formatter.result({
  "duration": 1297668400,
  "status": "passed"
});
formatter.after({
  "duration": 1166710700,
  "status": "passed"
});
});