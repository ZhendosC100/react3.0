
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(name => name.length > 0).map(item => item.toLocaleLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

let {cash, eu, rus} = sponsors;

let calcCash = (...own) => {
    let total = own[1].reduce((firstVal, lastVal) => firstVal + lastVal, own[0]);
    return total;
}


let money = calcCash(null, cash);

function makeBusiness(owner, director = 'Victor', cash, emp){
    let sumSponsors = [...eu, 'unexpected sponsor'];

    console.log(`We have a buisness. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our emplouers: ${emp} \n And we have a sponsors:\n ${null, sumSponsors} \n Note. Be careful with ${eu[0]}. It's a huge risk.`);
}


makeBusiness.apply(null, ['Sam', null, money, employersNames]);



