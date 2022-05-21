import { Character } from './Character.js';

export class King extends Character {
	constructor(name, family, age, reignYears) {
		const communication = 'Vais a morir todos';
		super(name, family, age, communication);
		this.reignYears = reignYears;
	}
}
