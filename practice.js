var button = document.getElementById('myBtn');
var text = document.getElementById('myText');
var todos = document.getElementById('notesContainer');

button.addEventListener('click', () => {
  var textValue = text.value;
  var paragraph = document.createElement('P');

  paragraph.innerText = textValue;
  paragraph.setAttribute('class', 'redText');
  todos.appendChild(paragraph);
});
