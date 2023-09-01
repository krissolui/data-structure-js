// Create a function that reverses a string:
// 'Hi My name is Kris' should be:
// 'sirK si eman yM iH'

const reverse = (str) => {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string') return;

	let reversed = '';
	for (let i = str.length - 1; i > -1; i--) {
		reversed += str.charAt(i);
	}
	return reversed;
};

const reverse2 = (str) => {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string') return;

	return str.split('').reverse().join('');
};

const str = 'Hi My name is Kris';
let reversed = reverse2(str);
console.log({ reversed });
