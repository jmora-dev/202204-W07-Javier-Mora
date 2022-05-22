import { validateIntegerBetweenCeroAndTen } from '../utils/validateIntegerBetweenCeroAndTen.js';
import { Character } from './Character.js';
import { Fighter } from './Fighter.js';
import { King } from './King.js';
import { Squire } from './Squire.js';

export class Advisor extends Character {
	emoji = '🎓';
	constructor(name, family, age, adviseCharacter, fawnerLevel) {
		const communication = 'No sé por qué, pero creo que voy a morir pronto';
		super(name, family, age, communication);
		this.adviseCharacter = this.validateAdviseCharacter(adviseCharacter);
		this.fawnerLevel = validateIntegerBetweenCeroAndTen(fawnerLevel);
	}

	validateAdviseCharacter(adviseCharacter) {
		if (
			adviseCharacter instanceof King ||
			adviseCharacter instanceof Fighter ||
			adviseCharacter instanceof Squire ||
			adviseCharacter instanceof Advisor
		) {
			return adviseCharacter;
		}
		throw TypeError(
			'AdviseCharacter must be an Advisor, Fighter, King or Squire'
		);
	}
}
