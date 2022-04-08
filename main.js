let container = document.body.querySelector('#form-data');
// console.log(container.innerHTML);

// new URLSearchParams(window.location.search).forEach((value, name) => {
//     container.appendChild(`${name}:    ${value}`)
//     // container.appendChild
// }); 

data = new URLSearchParams(window.location.search)

console.log(data.forEach(value => {container.append(value)}));