// Determine how many hours of sleep you got each night of the week
const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 7;
            break;
        case 'Tuesday':
            return 8;
            break;
        case 'Wednesday':
            return 5;
            break;
        case 'Thusday':
            return 6;
            break;
        case 'Friday':
            return 4;
            break;
        case 'Saturday':
            return 5;
            break;
        case 'Sunday':
            return 10;
            break;
        default:
            return "Please enter correct day!"
    }
};
// console.log(getSleepHours('Saturday'))


// Get the total sleep hours that you actually slept
const getActualSleepHours = () =>
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thusday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
console.log(getActualSleepHours())


//  Get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
    const idealHours = 4;
    return idealHours * 7;
};
console.log(getIdealSleepHours())


// Calculate the sleep debt, if any
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('Hi, you got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`Hi, you got ${actualSleepHours - idealSleepHours} hour(s) more sleep than you needed this week. You've been sleeping too much!`);
    } else {
        console.log(`Hi, you got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
    }
};
calculateSleepDebt();

