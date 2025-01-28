document.getElementById('bugForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the values from the form
    const title = document.getElementById('bugTitle').value;
    const description = document.getElementById('bugDescription').value;

    // Create a new bug item
    const bugItem = document.createElement('li');
    bugItem.innerHTML = `<strong>${title}</strong><p>${description}</p>`;

    // Append the new bug item to the list
    document.getElementById('bugItems').appendChild(bugItem);

    // Clear the form fields
    document.getElementById('bugTitle').value = '';
    document.getElementById('bugDescription').value = '';
});
