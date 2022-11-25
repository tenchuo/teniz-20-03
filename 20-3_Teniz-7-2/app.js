class Cars{
    constructor(options) {
        this.model = options.model
        this.year = options.year
        this.speet = options.speetKmH
        this.wheels = options.yesWheels
    }
}

class Car extends Cars {

static type = 'CARS'

constructor(options) {
    super(options)
    this.color = options.color
    this.salonColor = options.salonColor
}

voice() {
    console.log('Машина заведена')
}
}

const lexus = new Car({
model: 'lexus rx 300',
year: 2020,
yesWheels:4,
speetKmH: 290,
color: 'white',
salonColor: 'blue'
})

console.log(lexus)

const mercedesBenz = new Car({
model: 'c-class',
year: 2022,
speetKmH: 260,
yesWheels:4,
color: 'silver',
salonColor: 'black'
})

console.log(mercedesBenz);

const bmw = new Car({
model: 'BMW m8',
year: 2021,
speetKmH: 304,
yesWheels:4,
color: 'green',
salonColor: 'black'
})

console.log(bmw);