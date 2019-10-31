let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(name => name.length > 0).map(item => item.toLocaleLowerCase().trim());

export {employersNames};