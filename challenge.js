function changeCounter(operator) {
	let counter = document.querySelector('#counter')
	if (operator === "+" ) {
		return function() {counter.innerText = parseInt(counter.innerText) + 1}
	} else if (operator === "-") {
		return function() {counter.innerText = parseInt(counter.innerText) - 1}
	}
}

function stopTimer() {
	clearInterval(secondCounter)
	document.getElementById("+").disabled =true;
	document.getElementById("-").disabled =true;
	document.getElementById("<3").disabled =true;
}

function likeNumber (number) {
	let likes = document.querySelector('.likes');
	let item = document.getElementsByClassName(`${number}`)
	console.log(`pressed: ${number}`)
	if (item.length === 0) {
		let newItem = document.createElement('li')
		newItem.classList.add(`${number}`)
		newItem.innerText = `${number}: 1`
		likes.appendChild(newItem)
	} else {
		item[0].innerText = `${number}: ${parseInt(item[0].innerText.split(': ')[1]) + 1}`
	}
}

function likePush(){
	likeNumber(counter.innerText)
}

function leaveComment(e) {

	event.preventDefault();
	let comment = document.createElement('p')
	comment.innerText =	gorm.querySelector("input").value
	document.querySelector('.comments').appendChild(comment)
	gorm.querySelector("input").value = ''

}

let increaseCounter = changeCounter("+")
let decreaseCounter = changeCounter("-")
let gorm = document.querySelector("form")
let secondCounter = setInterval(increaseCounter, 1000)

let counter = document.querySelector('#counter')

document.getElementById("+").addEventListener('click', increaseCounter)

document.getElementById("-").addEventListener('click', decreaseCounter)


document.getElementById("<3").addEventListener('click', () => {likeNumber(counter.innerText)})

document.getElementById("pause").addEventListener('click', stopTimer)

gorm.addEventListener('submit', leaveComment)
