import { Character } from './Character.js';

export class Squire extends Character {
	constructor(name, family, age, squireOf, fawner) {
		const communication = 'Soy un loser';
		super(name, family, age, communication);
		this.squireOfFighter = squireOf;
		this.fawner = fawner;
	}
}
