//task 2
const heading = document.getElementById('head');
heading.style.background = '#4AE57D';

const myDiv = document.getElementById('myDiv');
const myList = document.getElementById('myList');
const second = document.getElementById('secondTask');

myDiv.getElementsByTagName('p')[0].style.fontWeight = 'bold';
myDiv.getElementsByTagName('p')[1].style.color = 'red';
myDiv.getElementsByTagName('p')[2].style.textDecoration = 'underline';
myDiv.getElementsByTagName('p')[3].style.fontStyle = 'italic';
myList.style.display = 'flex';
myList.style.listStyleType = 'none';
second.getElementsByTagName('span')[0].style.display = 'none';