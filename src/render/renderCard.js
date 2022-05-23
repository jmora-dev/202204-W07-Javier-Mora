import { renderCardData } from './renderCardData.js';

export const renderCard = (character) => {
	const html = `
	<div class="card character__card">
		<img
			src="${character.img}"
			alt="${nameAndFamilyString}"
			class="character__picture ${character.isAlive || 'die'}"
		/>
		<div class="card-body">
			<h2 class="character__name card-title h4">${nameAndFamilyString(character)}</h2>
			<div class="character__info">
				<ul class="list-unstyled">
					<li>Edad: ${character.age} años</li>
					<li>
						Estado:
						${statusIcon(character.isAlive)}
					</li>
				</ul>
			</div>
			<div class="character__overlay">
				${renderCardData(character)}
				<div class="character__actions">
					<button class="character__action btn">habla</button>
					<button class="character__action btn">muere</button>
				</div>
			</div>
		</div>
		<i class="emoji">${character.emoji}</i>
	</div>
	`;
	return html;
};

const nameAndFamilyString = (character) => {
	return `${character.name} - ${character.family}`;
};

const statusIcon = (isAlive) => {
	return isAlive
		? '<i class="fas fa-thumbs-up"></i>'
		: '<i class="fas fa-thumbs-down"></i>';
};
