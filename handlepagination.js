const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const pageInfo = document.getElementById('pageInfo');

nextBtn.addEventListener('click', () => {
    currentPage++;
    fetchTransactions();
});

previousBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchTransactions();
    }
});