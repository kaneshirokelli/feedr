/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- Change the value of the element with the name id to be whatever the user inputs when page first loads.
- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#fav-list" list.
- Clear the input box when the user clicks the button.
- Bonus: only add item if the input box is not blank (hint: check innerHTML property)

*/


window.onload = function() {
  var your_name = prompt("What is your name?"),
      button,
      thing_list;
      document.getElementById('name').innerHTML = your_name;
};

      var btn = document.getElementById('new-thing-button');
      btn.onclick =  function(event){
        debugger;
        event.preventDefault();
        MyApp.add_to_list(document.getElementById('fav-list'));
    };

MyApp = {};

MyApp.add_to_list = function(list) {
        var newItemElm  = document.getElementById('new-thing');
        var newItem = newItemElm.value;
        if (newItem !== ''){
        var newLi = document.createElement('li');
        newLi.innerHTML = newItem;
        list.appendChild(newLi);
        newItemElm.value = '';
        newItemElm.focus();
        }
        else{
          alert('enter something');
        }
}
