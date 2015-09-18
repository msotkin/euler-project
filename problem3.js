function prime(num) {
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

var entry = 600851475143;

for (var j=2; j < entry; j++) {
	if (entry % j === 0 && prime(j)) {
		x=j;
	}
}

console.log(x);