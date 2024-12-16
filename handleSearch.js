searchBox.addEventListener('input', (e) => {
    searchText = e.target.value;
    currentPage = 1;
    fetchTransactions();
});