import { ROLES } from '../constants/roles.js';

export const renderCardData = (character) => {
	if (!character || !character.role || !renderByRole[character.role]) {
		return '';
	}

	let html = '<ul class="list-unstyled">';
	html += renderByRole[character.role](character);
	html += '</ul>';
	return html;
};

const renderAdvisorData = (advisor) => {
	return `<li>Asesora a: ${advisor.adviseCharacter}</li>`;
};

const renderFighterData = (fighter) => {
	return `
	<li>Arma: ${fighter.weapon}</li>
	<li>Destreza: ${fighter.dexterity}</li>`;
};

const renderKingData = (king) => {
	return `<li>Años de reinado: ${king.reignYears}</li>`;
};

const renderSquireData = (squire) => {
	return `
	<li>Peloteo: ${squire.fawnerLevel}</li>
	<li>Sirve a: ${squire.assignTo}</li>`;
};

const renderByRole = {
	[ROLES.ADVISOR]: renderAdvisorData,
	[ROLES.FIGHTER]: renderFighterData,
	[ROLES.KING]: renderKingData,
	[ROLES.SQUIRE]: renderSquireData,
};
