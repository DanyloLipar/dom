//variant 1
const listOfUsers = document.getElementById('list');
const arr = [];
arr.push(listOfUsers.getElementsByTagName('li')[0].innerText);
arr.push(listOfUsers.getElementsByTagName('li')[1].innerText);
arr.push(listOfUsers.getElementsByTagName('li')[2].innerText);
arr.push(listOfUsers.getElementsByTagName('li')[3].innerText);
arr.push(listOfUsers.getElementsByTagName('li')[4].innerText);
const joinedArr = arr.join(' ');
console.log(`---Variant 1---
Output result: ${joinedArr}`);
//variant 2
const listUsers = document.querySelectorAll('#list li');
const secondArr = [];
for (let i = 0; i <= listUsers.length - 1; i++) {
    (secondArr.push(listUsers[i].innerText));
}

const secondJoined = secondArr.join(' ');
console.log(`---Variant 2--
Output result: ${secondJoined}`);