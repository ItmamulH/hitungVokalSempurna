function hitungVokal(str){
    var result ={
        A : 0,
        I : 0,
        U : 0,
        E : 0,
        O : 0,
    };

    for(var i = 0; i < str.length; i++){
        if(str[i] === 'A'){
            result.A++;
        } else if(str[i] === 'I'){
            result.I++;
        } else if(str[i] === 'U'){
            result.U++;
        } else if(str[i] === 'E'){
            result.E++;
        } else if(str[i] === 'O'){
            result.O++;
        }
    }
    return result
}

function totalVokal(str) {
	var vokal = 'AEIOU';
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (vokal.indexOf(str[i]) !== -1) {
			count++;
		}
	}
	return count;
}

var text = "Selamat Pagi Indonesia";
let capital = text.toUpperCase();

console.log(hitungVokal(capital));
console.log(`Total: ${totalVokal(capital)}`);
