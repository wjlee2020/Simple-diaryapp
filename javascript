const entryForm = document.getElementById("entry-form");
const entriesSection = document.querySelector("#entries");
const entryTextBox = document.querySelector(".entry-textbox");
const entriesNav = document.querySelector(".entries-nav"); //querySelector is more universal to select elements
/* entryForm.addEventListener("submit", function (event) {
   event.preventDefault(); //prevents the default page reload when clicking submit
   console.log(entryTextBox[0].value); //since gEBCN = HTML collection (array), use [0] to get the first. w/querySelector, this is not needed.
}); */

/*you can also make the function separate from addEventListener, as below
 ***for readability
 */

let count = 1; //working w/displayEntryBtn (js:26)
function addEntryToDom(event) {
  event.preventDefault(); // prevents defaul page reload on submit
  const entryDiv = document.createElement("div"); //entry div created
  entryDiv.className = "single-entry"; //div given class name
  entryDiv.innerText = entryTextBox.value; //div inner text value is whatever is entered in the text box (textarea)
  entryDiv.style.display = "none"; //style.display = 'none' will hide user entry by default after it is appended to the entries section
  entriesSection.appendChild(entryDiv); //append div to the entry section
  entryTextBox.value = ""; //reset text box (textarea) into empty string
  // creating buttons to that will display the hidden user entry
  const displayEntryBtn = document.createElement("button");
  displayEntryBtn.className = "display-entry-btn";
  displayEntryBtn.innerText = count;
  entriesNav.appendChild(displayEntryBtn);

  displayEntryBtn.addEventListener("click", function () {
    let allEntries = document.querySelectorAll(".single-entry"); //for loop here let's us iterate thru each i at a time to set the display = 'none'
    for (i = 0; i < allEntries.length; i++) {
      allEntries[i].style.display = "none";
    }
    entryDiv.style.display = "block"; // this will reveal the current display property to 'block'
  });

  count++; //incrementing the displayEntryBtn innerText (count 1) each time something is submitted
}

entryForm.addEventListener("submit", addEntryToDom);
