const main = document.getElementById('main');
const addUser = document.getElementById('add-user');
const doublebtn = document.getElementById('double');
const showmillion = document.getElementById('filter-millionair');
const calculation = document.getElementById('calculate-deposit');

const sort = document.getElementById('sort');


getRandomUserData();
getRandomUserData();
getRandomUserData();

let data = [];

//fetch data from randomuser.me 
async function getRandomUserData() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    //console.log(data);
    const user = data.results[0];
    const newUser = {
        Name: `${user.name.first} ${user.name.last}`,
        Deposit : Math.floor(Math.random() * 1000000),
    };
        addData(newUser);
        // console.log(data);
}

//double the deposit of all users
function doubleDeposit() {
    data = data.map(user => {
        return{...user, Deposit: user.Deposit * 2};
    }
    );
    updateUser();
}

//filter the user list who's deposit is more than 1 million
function filterMillionair() {
    data = data.filter(user => user.Deposit > 1000000);
    updateUser();
}

//sort the user list by deposit
function sortDeposit() {
    data.sort((a, b) => a.Deposit - b.Deposit);
    updateUser();
}


//total deposit of all users in the list using reduce

function totalDeposit() {
    const total = data.reduce((acc, user) => acc + user.Deposit, 0);
    const totalDiv = document.createElement('div');
    totalDiv.classList.add('total');
    totalDiv.innerHTML = `<h3><strong>Total Deposite</strong> ${formatDeposit(total)}</h3>`;
    main.appendChild(totalDiv);

}



//add user to the data array
function addData(user) {
    data.push(user);
    updateUser();
}

//update the user list
function updateUser(prodata = data) {
    //clear main div
main.innerHTML = '<h2><strong>Depositer Name</strong> Deposite</h2>';
prodata.forEach(user => {
    const div = document.createElement('div');
    div.classList.add('depositer');
    div.innerHTML = `<strong>${user.Name}</strong> ${formatDeposit(user.Deposit)}`;
    main.appendChild(div);

});

}

function formatDeposit(deposit) {
    return 'TK. ' + deposit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//event listener for add user button
addUser.addEventListener('click', () => {
    getRandomUserData();
}
);

doublebtn.addEventListener('click', doubleDeposit);

showmillion.addEventListener('click', filterMillionair);

sort.addEventListener('click', sortDeposit);

calculation.addEventListener('click', totalDeposit);
