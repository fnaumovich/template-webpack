export default function CarMaker() {}

CarMaker.prototype.drive = function () {
    return `Vroom, I have ${this.doors} doors`;
};

CarMaker.factory = function (type) {
    const constr = type;

    if (typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: `${constr} doesnt exist`,
        };
    }

    // в этой точке известно, что требуемый конструктор существует
    // поэтому определим отношения наследования с предком,
    // но только один раз
    if (typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }
    // создать новый экземпляр
    return new CarMaker[constr]();
};

CarMaker.Compact = function () {
    this.doors = 4;
};

CarMaker.Convertible = function () {
    this.doors = 2;
};

CarMaker.SUV = function () {
    this.doors = 24;
};
