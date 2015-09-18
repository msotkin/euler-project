var i = 1;
var j = 2;
var sum = 0;

while (i<4000000) {
	if (i % 2 === 0) {
		sum+=i;
	}
	var k = i + j;
	i=j;
	j=k;
}

console.log(sum);