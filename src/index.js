import { createDataClasses } from './data/charactersData.js';
import { renderCardList } from './render/renderCardList.js';
import { renderSpeak } from './render/renderSpeak.js';

const data = createDataClasses();

const onSpeak = (charIndex) => {
	console.log('speak');
	const char = data.find((e, i) => i === charIndex);
	renderSpeak(char);
};

const onDie = (charIndex) => {
	console.log('die');
	const char = data.find((e, i) => i === charIndex);
	char.die();
	renderCardList(data, onSpeak, onDie);
};

renderCardList(data, onSpeak, onDie);
