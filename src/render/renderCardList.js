import { renderCard } from './renderCard.js';

export const renderCardList = (charactersList, onSpeak, onDie) => {
	const element = document.querySelector('.characters-list');
	const cardArray = charactersList.map((character) =>
		renderListItemCard(character)
	);
	element.innerHTML = cardArray.join('');
	const buttonContainer = document.querySelectorAll('.character__actions');
	buttonContainer.forEach((container, index) => {
		const buttons = container.querySelectorAll('button');
		buttons[0].addEventListener('click', () => onSpeak(index));
		buttons[1].addEventListener('click', () => onDie(index));
	});
};

const renderListItemCard = (character) => {
	let html = '<li class="character col">';
	html += renderCard(character);
	html += '</li>';
	return html;
};
