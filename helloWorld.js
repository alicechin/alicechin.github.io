function Testing() {
    document.getElementById("picture").style.height = "80%";
    document.getElementById("picture").style.width = 'auto';
        }

function header() {
    var header = "My List of Tasks";
    document.write('<font color="#1E232D" face = "cursive" size = "18"><center><b>' + header + '</bold></center></font>');
}

function add() {
    var input, task;
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    input = document.getElementById("inputTask");
    task = input.elements["name"].value;
    newCheckbox.id = task;

    var label = document.createElement('label');
    label.htmlFor = task;
    label.style.fontFamily = "Baskerville";
    label.style.fontSize = "20px";
    var textNode = document.createTextNode(task);
    label.appendChild(textNode);

    newCheckbox.onclick = lineThrough(label, newCheckbox);
    document.getElementById("toBeDone").appendChild(newCheckbox);
    document.getElementById("toBeDone").appendChild(label);
    document.getElementById("toBeDone").appendChild(document.createElement("br"));


}

function lineThrough(label, checkbox) {
    if (checkbox.checked) {
        label.style.setProperty("text-decoration", "line-through");
    }
}

