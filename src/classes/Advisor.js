import { Character } from './Character.js';
import { ROLES } from '../constants/roles.js';
export class Advisor extends Character {
	emoji = '🎓';
	role = ROLES.ADVISOR;
	constructor({ img, name, family, age, adviseCharacter }) {
		const communication = 'No sé por qué, pero creo que voy a morir pronto';
		super(img, name, family, age, communication);
		this.adviseCharacter = adviseCharacter;
	}

	validateAdviseCharacter(adviseCharacter) {
		if (
			![ROLES.ADVISOR, ROLES.FIGHTER, ROLES.KING, ROLES.SQUIRE].contains(
				adviseCharacter?.role
			)
		) {
			throw TypeError(
				'AdviseCharacter must be an Advisor, Fighter, King or Squire'
			);
		}
		return adviseCharacter;
	}
}
