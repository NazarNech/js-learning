const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return (mark.mass / mark.height ** 2).toFixed(1);
    }
};

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return (john.mass / john.height ** 2).toFixed(1);
    }
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`);
} else {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`);
}

