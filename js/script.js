function addItemToList() {
  // a function to add the item to the list
}

function checkItemOffList() {
  // a function to check the item off the list
  //class="shopping-item"
  //class="shopping-item-toggle"

  $(".shopping-item-toggle").on("click", function() {
    $(this)
      .parent()
      .parent()
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
}

function deleteItem() {
  // a function to delete the item
}

$(checkItemOffList);
