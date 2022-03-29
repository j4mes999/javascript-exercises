const findTheOldest = function(people) {
  return (people.sort( (p1,p2) => getAge(p2) -  getAge(p1) ))[0];

};

function getAge(person){
    let yearOfDeath = person.yearOfDeath;
    if(yearOfDeath == undefined){
        yearOfDeath = new Date().getFullYear();
    }
    return (yearOfDeath - person.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
