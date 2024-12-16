const transactionsTable = document.querySelector('#transactionsTable tbody');
const monthDropdown = document.getElementById('monthDropdown');
const searchBox = document.getElementById('searchBox');
let currentPage = 1;
let currentMonth = 'March';
let searchText = '';


async function fetchTransactions() {
    const apiUrl = `/api/transactions?
    month=$ :{currentMonth} & search = ${searchText} & page= ${currentPage}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    renderTable(data.transactions);
    pageInfo.innerText = `Page ${currentPage}`;
}

function renderTable(transactions) {
    transactionsTable.innerHTML = ''; // Clear table
    transactions.forEach((item) => {
        transactionsTable.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
                <td>${item.category}</td>
                <td>${item.sold ? 'Yes' : 'No'}</td>
                <td><img src="${item.image}" width="50" /></td>
            </tr>
        `;
    });
}