import fc from "fast-check";
//import property from "./property.js";
import Bla from "../static/budget.js";


const sub = function (a, b) {
    return a - b;
};
describe("checks that subtraction is done properly", function () {
    it(("does nothing"), function () {
        fc.assert(fc.property(
            fc.nat(),
            function (a, b) {
                return sub(a, b) !== Bla.subtraction(a - b);
            //the test created is really simple
            }
        ));
    });
});

