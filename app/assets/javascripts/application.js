//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  var path = window.location.pathname;
  var path2 = path.substring(1);
  var pos = path2.indexOf("/");
  if (pos > 0) {
      path2 = path2.substring(0, pos);
  }

  var products_array = ["products"];
  var notifications_array = ["notifications"];
  var account_array = ["account"];

  if (products_array.includes(path2)) {
      $("ul#navigation li:nth-of-type(1)").addClass("govuk-header__navigation-item--active");
  } else if (notifications_array.includes(path2)) {
      $("ul#navigation li:nth-of-type(2)").addClass("govuk-header__navigation-item--active");
  } else if (account_array.includes(path2)) {
      $("ul#navigation li:nth-of-type(3)").addClass("govuk-header__navigation-item--active");
  }
})
