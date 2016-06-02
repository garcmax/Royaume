export var res = {
	wood : 0,
	stone: 0,
	fish: 0
}

export var debug_reset = function() {
	res.wood = 0;
	res.stone = 0;
	res.fish = 0;
    console.log('on reset les resources');
}

export var production = {
    wood: 1,
    stone: 0.2,
    fish: 2 
}