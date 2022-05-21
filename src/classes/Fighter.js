import { Character } from './Character.js';

export class Fighter extends Character {
	constructor(name, family, age, weapon, dexterity) {
		const communication = 'Primero pego y luego pregunto';
		super(name, family, age, communication);
		this.weapon = weapon;
		this.dexterity = dexterity;
	}
}
