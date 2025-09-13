const button = document.querySelector('.btn');
const notes = document.querySelector('.notes');

button.addEventListener("click", function () {
    const container = document.createElement("div"); // wrapper for note + button
    const para = document.createElement("p");
    const del = document.createElement("button");

    container.className = "note-item";
    para.className = "para";
    del.className = "delete";
    del.innerText = "Delete";

    para.setAttribute("contenteditable", "true");

    container.appendChild(para);
    container.appendChild(del);
    notes.appendChild(container);

    del.addEventListener("click", function () {
        container.remove(); // ✅ removes both p + delete button
    });
});
