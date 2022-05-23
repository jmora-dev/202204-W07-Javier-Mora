import { Character } from './Character.js';
import { ROLES } from '../constants/roles.js';
import { validateIntegerBetweenCeroAndTen } from '../utils/validateIntegerBetweenCeroAndTen.js';

export class Squire extends Character {
	emoji = '🛡';
	role = ROLES.SQUIRE;
	constructor(name, family, age, assignTo, fawnerLevel) {
		const communication = 'Soy un loser';
		super(name, family, age, communication);
		this.assignTo = assignTo;
		this.fawnerLevel = validateIntegerBetweenCeroAndTen(fawnerLevel);
	}

	validateSquireAssign(assignTo) {
		if (assignTo?.role !== ROLES.FIGHTER) {
			throw TypeError('AssignTo must be a Fighter');
		}
		return assignTo;
	}
}
