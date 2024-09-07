let teams = [];
teams[1] = 'Aston Villa';
teams[2] = 'Manchester United';
teams[3] = 'Chelsea';
teams[4] = 'Fulham';
teams[5] = 'Liverpool';
teams[6] = 'Manchester City';
teams[7] = 'Tottenham Hotspur';
teams[8] = 'West Ham United';

/* TODO
1. Виокремити код, що розбирає fixtures в scores в окрему функцію
2. Scores містить в середині не тільки дані про результати, але й один undefined\empty елемент від якого варто позбавитися
3. Доповнити scores даними про ID кожної команди
4. Обгорнути fixtures (або всі стартові дани - результати, команди) в функцію, котра їх вертатиме, для імітації отримання даних іззовні
5. Скласти функції сортування в массив
*/

let fixtures = [
	{ h_team_id: 1, v_team_id: 2, h_team_g: 3, v_team_g: 0 },
	{ h_team_id: 2, v_team_id: 1, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 1, v_team_id: 3, h_team_g: 2, v_team_g: 2 },
	{ h_team_id: 3, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 4, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 4, v_team_id: 1, h_team_g: 2, v_team_g: 2 },
	{ h_team_id: 1, v_team_id: 5, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 5, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 6, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 6, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 7, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 7, v_team_id: 1, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 1, v_team_id: 8, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 8, v_team_id: 1, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 2, v_team_id: 3, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 3, v_team_id: 2, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 2, v_team_id: 4, h_team_g: 3, v_team_g: 2 },
	{ h_team_id: 4, v_team_id: 2, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 2, v_team_id: 5, h_team_g: 0, v_team_g: 1 },
	{ h_team_id: 5, v_team_id: 2, h_team_g: 0, v_team_g: 1 },
	{ h_team_id: 2, v_team_id: 6, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 6, v_team_id: 2, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 2, v_team_id: 7, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 7, v_team_id: 2, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 2, v_team_id: 8, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 8, v_team_id: 2, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 3, v_team_id: 4, h_team_g: 0, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 3, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 3, v_team_id: 5, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 5, v_team_id: 3, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 3, v_team_id: 6, h_team_g: 3, v_team_g: 2 },
	{ h_team_id: 6, v_team_id: 3, h_team_g: 1, v_team_g: 2 },
	{ h_team_id: 3, v_team_id: 7, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 7, v_team_id: 3, h_team_g: 2, v_team_g: 0 },
	{ h_team_id: 3, v_team_id: 8, h_team_g: 0, v_team_g: 3 },
	{ h_team_id: 8, v_team_id: 3, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 5, h_team_g: 1, v_team_g: 0 },
	{ h_team_id: 5, v_team_id: 4, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 6, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 6, v_team_id: 4, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 4, v_team_id: 7, h_team_g: 2, v_team_g: 3 },
	{ h_team_id: 7, v_team_id: 4, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 4, v_team_id: 8, h_team_g: 1, v_team_g: 3 },
	{ h_team_id: 8, v_team_id: 4, h_team_g: 3, v_team_g: 3 },
	{ h_team_id: 5, v_team_id: 6, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 6, v_team_id: 5, h_team_g: 1, v_team_g: 2 },
	{ h_team_id: 5, v_team_id: 7, h_team_g: 0, v_team_g: 2 },
	{ h_team_id: 7, v_team_id: 5, h_team_g: 0, v_team_g: 0 },
	{ h_team_id: 5, v_team_id: 8, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 8, v_team_id: 5, h_team_g: 3, v_team_g: 0 },
	{ h_team_id: 6, v_team_id: 7, h_team_g: 1, v_team_g: 1 },
	{ h_team_id: 7, v_team_id: 6, h_team_g: 0, v_team_g: 1 },
	{ h_team_id: 6, v_team_id: 8, h_team_g: 2, v_team_g: 2 },
	{ h_team_id: 8, v_team_id: 6, h_team_g: 3, v_team_g: 2 },
	{ h_team_id: 7, v_team_id: 8, h_team_g: 2, v_team_g: 1 },
	{ h_team_id: 8, v_team_id: 7, h_team_g: 3, v_team_g: 1 }
  ]

let scores = []
function teamsData(teamName){
		return {
			name: teamName,
			MP: 0,
			W: 0,
			D: 0,
			L: 0,
			F: 0,
			A: 0,
			DF: 0,
			P: 0,
			}
	}
for(let x = 1; x < 9; x++){
	scores[x] = teamsData(teams[x])
}


for(let x = 0; x < fixtures.length; x++){
	scores[fixtures[x].h_team_id].MP += 1
	scores[fixtures[x].v_team_id].MP += 1
	scores[fixtures[x].h_team_id].F += fixtures[x].h_team_g
	scores[fixtures[x].v_team_id].F += fixtures[x].v_team_g
	scores[fixtures[x].h_team_id].A += fixtures[x].v_team_g
	scores[fixtures[x].v_team_id].A += fixtures[x].h_team_g
	if (fixtures[x].h_team_g > fixtures[x].v_team_g){
		scores[fixtures[x].h_team_id].W += 1
		scores[fixtures[x].h_team_id].P += 3
		scores[fixtures[x].v_team_id].L += 1
	}
	else if (fixtures[x].h_team_g < fixtures[x].v_team_g){
		scores[fixtures[x].v_team_id].W ++
		scores[fixtures[x].v_team_id].P += 3
		scores[fixtures[x].h_team_id].L += 1
	}
	else {
		scores[fixtures[x].h_team_id].D += 1
		scores[fixtures[x].v_team_id].D += 1
		scores[fixtures[x].h_team_id].P += 1
		scores[fixtures[x].v_team_id].P += 1
	}
	scores[fixtures[x].h_team_id].DF = scores[fixtures[x].h_team_id].F - scores[fixtures[x].h_team_id].A
	scores[fixtures[x].v_team_id].DF = scores[fixtures[x].v_team_id].F - scores[fixtures[x].v_team_id].A
}
//scores = [...scores].filter((item) => item !== undefined);
//console.log(scores);

function SortingWins(a, b){
	if(a.W < b.W){
		return 1
	}
	else if(a.W > b.W){
		return -1
	}
	return 0
}

function SortingDraws(a, b){
	if(a.D < b.D){
		return 1
	}
	else if(a.D > b.D){
		return -1
	}
	return 0
}

function SortingLooses(a, b){
	if(a.L < b.L){
		return 1
	}
	else if(a.L > b.L){
		return -1
	}
	return 0
}

function SortingGF(a, b){
	//console.log('SortingGF')
	//console.trace()
	if(a.F < b.F){
		return 1
	}
	else if(a.F > b.F){
		return -1
	}
	return 0
}

function SortingGA(a, b){
	if(a.A < b.A){
		return 1
	}
	else if(a.A > b.A){
		return -1
	}
	return 0
}

function SortingPoints(a, b){
	if(a.P < b.P){
		return 1
	}
	else if(a.P > b.P){
		return -1
	}
	return 0
}

function SortingDiff(a, b){
	if(a.DF < b.DF){
		return 1
	}
	else if(a.DF > b.DF){
		return -1
	}
	return 0
}

function drawTable(tBody, scores) {
	tBody.innerHTML = null
	scores.forEach(function(item, index){
		let row = document.createElement("tr")
		row.innerHTML = '<td>'+(index+1)+'</td>'
		row.innerHTML += '<td>'+item.name+'</td>'
		row.innerHTML += '<td>'+item.MP+'</td>'
		row.innerHTML += '<td>'+item.W+'</td>'
		row.innerHTML += '<td>'+item.D+'</td>'
		row.innerHTML += '<td>'+item.L+'</td>'
		row.innerHTML += '<td>'+item.F+'</td>'
		row.innerHTML += '<td>'+item.A+'</td>'
		row.innerHTML += '<td>'+item.DF+'</td>'
		row.innerHTML += '<td>'+item.P+'</td>'
		tBody.append(row)
	})
}

//console.table(scores.sort(SortingWins))
scores.sort(SortingPoints)
let tBody = document.getElementById("tableBody")

drawTable(tBody, scores)


//let clickable = document.querySelectorAll('.clickable')
let classes = document.getElementsByClassName('clickable')
//console.log(classes);
let clickable = [...classes]

for(el of classes){
	//console.log(el);
}

// SOrting

clickable.forEach(function(element){
	let sort = element.dataset.sort;
	let sortFunction;
	switch(sort){
		case 'W': {
			sortFunction = SortingWins
			break
		}
		case 'D': {
			sortFunction = SortingDraws
			break
		}
		case 'L': {
			sortFunction = SortingLooses
			break
		}
		case 'GF': {
			sortFunction = SortingGF
			break
		}
		case 'GA': {
			sortFunction = SortingGA
			break
		}
		case 'DF': {
			sortFunction = SortingDiff
			break
		}
		case 'P': {
			sortFunction = SortingPoints
			break
		}
	}

	

	if(sortFunction !== undefined){
		element.addEventListener('click', function (){	
			//console.log(1);
			//scores.sort(sortFunction)
			drawTable(tBody, [...scores].sort(sortFunction))
		})
	}

	
});



/*
let variab = 'GF'
let funcName = 'Sorting' + variab;
scores.sort(window[funcName])
*/
