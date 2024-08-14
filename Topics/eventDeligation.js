// In simple words, event delegation is the process of handling events
// on a parent element instead of binding the event listener to each child element individually.
//  In traditional event handling, we have to add an event listener to each element that we want to respond to.

//wihtout event deleation
const items = document.querySelectorAll(".item");
console.log(items);

items.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.textContent);
  });
});

// with event delegation

const itemList = document.getElementById("item-list");
console.log(itemList);

itemList.addEventListener("click", (event) => {
  if (event.target && event.target.matches("li.item")) {
    console.log(event.target.textContent);
  }
});
