export class Character {
	isAlive = true;
	constructor(img, name, family, age, communication = '') {
		this.img = img;
		this.name = name;
		this.family = family;
		this.age = age;
		this.communication = communication;
	}

	die() {
		this.isAlive = false;
	}

	speak() {
		return this.communication;
	}
}
