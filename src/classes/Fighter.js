import { Character } from './Character.js';
import { ROLES } from '../constants/roles.js';
import { validateIntegerBetweenCeroAndTen } from '../utils/validateIntegerBetweenCeroAndTen.js';

export class Fighter extends Character {
	emoji = '🗡';
	role = ROLES.FIGHTER;
	constructor(name, family, age, weapon, dexterity) {
		const communication = 'Primero pego y luego pregunto';
		super(name, family, age, communication);
		this.weapon = weapon;
		this.dexterity = validateIntegerBetweenCeroAndTen(dexterity);
	}
}
