import { Character } from './Character.js';

export class Advisor extends Character {
	constructor(name, family, age, adviseCharacter) {
		const communication = 'No sé por qué, pero creo que voy a morir pronto';
		super(name, family, age, communication);
		this.adviseCharacter = adviseCharacter;
	}
}
