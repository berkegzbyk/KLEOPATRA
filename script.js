function searchName() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const listItems = document.querySelectorAll('#nameList li');

    listItems.forEach(item => {
        item.classList.remove('highlight');
        if (item.textContent.toLowerCase().includes(input)) {
            item.classList.add('highlight');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}
