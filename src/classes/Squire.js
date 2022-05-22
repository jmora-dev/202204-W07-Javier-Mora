import { Character } from './Character.js';
import { Fighter } from './Fighter.js';

export class Squire extends Character {
	emoji = '🛡';
	constructor(name, family, age, assignTo, fawner) {
		const communication = 'Soy un loser';
		super(name, family, age, communication);
		this.assignTo = assignTo;
		this.fawner = fawner;
	}

	validateSquireAssign(assignTo) {
		if (assignTo instanceof Fighter) {
			return assignTo;
		}
		throw TypeError('AssignTo must be a Fighter');
	}
}
