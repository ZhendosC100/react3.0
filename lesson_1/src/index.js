
import {CalcMoney, eu, cash} from './parts/calc';
import {Employers} from './parts/employers';

let employers = new Employers;
let employersNames = employers.createEmployers();

let calcMoney = new CalcMoney(cash);
let money = calcMoney.calcCash();


class MakeBusiness{
    constructor({
        owner = null, 
        director = 'Victor', 
        cash = 10000, 
        emp = '',
        eu = ['us']
    }){
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
        this.eu = eu;
    }

    showResult(){
        let sumSponsors = [...this.eu, 'unexpected sponsor'];
        console.log(`We have a buisness. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our emplouers: ${this.emp} \n And we have a sponsors:\n ${null, sumSponsors} \n Note. Be careful with ${this.eu[0]}. It's a huge risk.`);
    }
}

let makeBusiness = new MakeBusiness ({
    owner: 'Sam',
    cash: money,
    eu: eu,
    emp: employersNames
});

makeBusiness.showResult();

