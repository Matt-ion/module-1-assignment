class Car {
    constructor(make = "Toyota", model = "Corolla", year = 2008, Odometer = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.Odometer = Odometer;
    }

    make;
    model;
    year;
    Odometer;
    #engine = {
        CylinderCount: 4,
        isRunning: false,
    };
    setEngine(CylinderCount) {
        this.#engine.CylinderCount = CylinderCount;
        output("Engine now has " + this.#engine.CylinderCount + " cylinders");
    }

    engineOn() {
        this.#engine.isRunning = true;
        output("Engine is now on. ");
    }
    engineOff() {
        this.#engine.isRunning = false;
        output("Engine is now off. ");
    }

    drive(distance) {

        // To make sure that thje engine is running
        if (this.#engine.isRunning == false) {
            output("Engine is not running");
            return;
        }

        this.Odometer += distance;
        output("Succsessfully drove " + distance + "km.");
    }

    readOdometer() {
        output("Odometer: " + this.Odometer + "km.");
    }


}


async function main() {

    let myCar = new Car();
    myCar.setEngine(6);
    myCar.engineOn();
    myCar.drive(100);
    myCar.engineOff();
    myCar.engineOn();
    myCar.drive(50);
    myCar.engineOff();
    myCar.readOdometer();
}


