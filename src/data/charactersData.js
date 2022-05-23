import { Advisor } from '../classes/Advisor.js';
import { Fighter } from '../classes/Fighter.js';
import { King } from '../classes/King.js';
import { Squire } from '../classes/Squire.js';
import { ROLES } from '../constants/roles.js';

const charactersData = [
	{
		id: 1,
		role: ROLES.KING,
		img: './img/joffrey.jpg',
		name: 'Joffrey Baratheon',
		family: 'Baratheon',
		age: 14,
		reignYears: 1,
	},
	{
		id: 2,
		role: ROLES.FIGHTER,
		img: './img/jaime.jpg',
		name: 'Jaime Lannister',
		family: 'Lannister',
		age: 34,
		weapon: 'Espada',
		dexterity: 8,
	},
	{
		id: 3,
		role: ROLES.FIGHTER,
		img: './img/daenerys.jpg',
		name: 'Daenerys Targaryen',
		family: 'Targaryen',
		age: 16,
		weapon: 'Dragones',
		dexterity: 5,
	},
	{
		id: 4,
		role: ROLES.ADVISOR,
		img: './img/tyrion.jpg',
		name: 'Tyrion Lannister',
		family: 'Lannister',
		age: 27,
		adviseCharacter: 'Daenerys Targaryen',
	},
	{
		id: 5,
		role: ROLES.SQUIRE,
		img: './img/bronn.jpg',
		name: 'Bronn',
		family: 'Stokeworth',
		age: 32,
		assignTo: 'Jaime Lannister',
		fawnerLevel: 7,
	},
];

const createClassByRole = {
	[ROLES.ADVISOR]: (data) => new Advisor(data),
	[ROLES.FIGHTER]: (data) => new Fighter(data),
	[ROLES.KING]: (data) => new King(data),
	[ROLES.SQUIRE]: (data) => new Squire(data),
};

export const createDataClasses = () => {
	return charactersData.map((data) => createClassByRole[data.role](data));
};
