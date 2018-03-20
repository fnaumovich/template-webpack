function Parent(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

function inherit(Class, Parent) {
    Class.prototype = new Parent();
}