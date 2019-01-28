// Code your solution in this file

function findMatching(drivers, find) {
    
    return drivers.filter(function (driver) {return driver.toUpperCase() === find.toUpperCase()});
};

function fuzzyMatch(drivers, find) {
    return drivers.filter(function (driver) {return driver[0] === find[0]});
};

function matchName(drivers, find) {
    return drivers.filter(function (driver) {return driver.name === find})
}