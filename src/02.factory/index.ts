class Car {
    color: string
    model: string
    year: number
    constructor(color: string, model: string, year: number) {
        this.color = color
        this.model = model
        this.year = year
    }
}

class MercCar extends Car {
    constructor() {
        super("red", "c1", 2022)
    }
}

class BMWCar extends Car {
    constructor() {
        super("blue", "x6", 2020)
    }
}

export function carFactory(carCompany: string) {
    switch (carCompany) {
        case "mercedis":
            return new MercCar()
        case "BMW":
            return new BMWCar()
        default:
            break;
    }

}

// const mercedis=new Car("red","mercedis",2022)
// console.log(mercedis);
