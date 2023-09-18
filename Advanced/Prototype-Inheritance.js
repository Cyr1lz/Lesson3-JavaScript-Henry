function Vehicle() { //Grand Parent
    this.autoDrive = 'true';
    this.hybridEngine = 'false';
}

function SportsCar(){}; //Parent
SportsCar.prototype = new Vehicle();

function MonsterTruck(){
    this.hybridEngine = 'true'
};
MonsterTruck.prototype = new Vehicle();

function Porsche() { //Child
    this.gears = 7
    this.turbo = 'true'
}
Porsche.prototype = new SportsCar()

console.log(new Porsche().hybridEngine); //inherits hybridEngine from Grandparent Vehicle
console.log(new MonsterTruck().hybridEngine);