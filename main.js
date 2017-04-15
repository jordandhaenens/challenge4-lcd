var number = 11;
var runCondition = false;
while (!runCondition) {
	if (number % 6 === 0 && number % 7 === 0 && number % 8 === 0 && number % 9 === 0 && number % 10 === 0) {
		console.log(number);
		runCondition = true;
	} else {
		number += 1;
	}
}

// var number = 11;
// var runCondition = false;
// while (!runCondition) {
// 	if (number % 6 === 0 && number % 7 === 0) {
// 		console.log(number);
// 		runCondition = true;
// 	} else {
// 		number += 1;
// 	}
// }




// var runCondition = false;
// while ( !runCondition ) {
// 	var i = 11;
// 	switch (i % 6) {
// 		case 0:
// 			switch (i % 7) {
// 				case 0:
// 					switch (i % 8) {
// 						case 0:
// 							switch (i % 9) {
// 								case 0:
// 									switch (i % 10) {
// 										case 0:
// 											console.log(i);
// 											runCondition = true;
// 									}
// 							}
// 					}
// 			}
// 	}
// 	i += 1;
// }


/****
Find out why this switch statement won't move on to the next switch statement
****/

// var runCondition = false;
// while ( !runCondition ) {
// 	var i = 6;
// 	switch (i % 3) {
// 		case 0:
// 			break;
// 		case 1:
// 			i++;
// 			break;
// 	}
// 	switch (i % 5) {
// 		case 0:
// 			console.log(i);
// 			runCondition = true;
// 			break;
// 		case 1:
// 			i++;
// 			break;
// 	}
// }
