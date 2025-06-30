
// import "./01.singleton/index"
import { carFactory } from "./02.factory/index"
// import "./03.prototype/index"
// import "./04.builder/index"
// import "./05.iterator/index"

const car = carFactory("BMW")
console.log(car);

const car2 = carFactory("mercedis")
console.log(car2);
