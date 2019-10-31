let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

let {cash, eu, rus} = sponsors;

let calcCash = (...own) => {
    let total = own[1].reduce((firstVal, lastVal) => firstVal + lastVal, own[0]);
    return total;
};


let money = calcCash(null, cash);

export {cash, eu, rus, money};