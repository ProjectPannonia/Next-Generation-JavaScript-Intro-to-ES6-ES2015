//////////////////////////////////////////////////////////////////////////////////////////////
// Lecture: Classes with subclasses

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var johnAthlete = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete.calculateAge();
johnAthlete.wonMedal();