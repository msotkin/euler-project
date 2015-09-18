var sum = 0;

for (number = 1; number < 1000; number++) {
	if (number % 3 === 0 || number % 5 === 0) {
		sum += number;
	};
}

console.log(sum);