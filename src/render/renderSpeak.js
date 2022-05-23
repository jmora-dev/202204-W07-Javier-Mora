export const renderSpeak = (character) => {
	console.log(character, character.communication);
	const html = `
	<p class="comunications__text display-1">${character.communication}</p>
	<img
		class="comunications__picture"
		src="${character.img}"
		alt="${nameAndFamilyString(character)}"
	/>`;
	console.log(html);
	const element = document.querySelector('.comunications');
	element.innerHTML = html;
	element.classList.add('on');
	setTimeout(() => {
		element.classList.remove('on');
	}, 2000);
};

const nameAndFamilyString = (character) => {
	return `${character.name} - ${character.family}`;
};
