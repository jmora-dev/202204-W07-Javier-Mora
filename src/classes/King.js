import { Character } from './Character.js';
import { ROLES } from '../constants/roles.js';

export class King extends Character {
	emoji = '👑';
	role = ROLES.KING;
	constructor({ img, name, family, age, reignYears }) {
		const communication = 'Vais a morir todos';
		super(img, name, family, age, communication);
		this.reignYears = reignYears;
	}
}
