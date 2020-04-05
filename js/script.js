"use strict";
function addItemToList() {
  // a function to add the item to the list
  //   event.preventDefault();

  let newItem = $("#shopping-list-entry");
  $(".shopping-list").append(`<li>
  <span class="shopping-item">${newItem.val()}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`);
  newItem.val("");
}

function checkItemOffList() {
  // a function to check the item off the list

  $(".shopping-list").on("click", ".shopping-item-toggle", function() {
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
$("#js-shopping-list-form").submit(event => {
  event.preventDefault();
  let text = $("#shopping-list-entry").val();
  console.log(text.trim().length);
  if (text.trim().length != 0) {
    console.log("I was here");
    addItemToList();
  }
});

$("#shopping-list-entry").on("keypress", function(e) {
  //   e.preventDefault();
  if (e.which == 13) {
    let text = $("#shopping-list-entry").val();
    console.log(text.trim().length);
    if (text.trim().length != 0) {
      console.log("I was here");
      addItemToList();
    }
  }
});

$(".shopping-list").on("click", ".shopping-item-delete", function() {
  $(this)
    .parent()
    .parent()
    .remove();
});

$(checkItemOffList);
