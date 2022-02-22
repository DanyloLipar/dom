//task 3
const general = document.getElementById('click');
const buttonClick = document.getElementById('button');
buttonClick.addEventListener('click', onClicking);
buttonClick.addEventListener('mouseover', onHover);
buttonClick.addEventListener('mouseout', onLeave);
function onClicking() {
    const pressed = document.createElement('p')
    pressed.innerHTML = 'I was pressed!';
    general.appendChild(pressed);
}

function onHover() {
    const hovered = document.createElement('p')
    hovered.innerHTML = 'Mouse on me!';
    general.appendChild(hovered);
}

function onLeave() {
    const leave = document.createElement('p')
    leave.innerHTML = 'Mouse is not on me!';
    general.appendChild(leave);
}