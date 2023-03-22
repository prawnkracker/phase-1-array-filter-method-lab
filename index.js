// Code your solution here
function findMatching(array, name){
    return array.filter(function(item){
        return item.toLowerCase() === name.toLowerCase();
    })
}

function fuzzyMatch(drivers,string){
    return drivers.filter(function(item){
        return item[0] === string[0];
    })
}

function matchName(drivers,string) {
    return drivers.filter(function(item){
        return item.name === string
    })
}