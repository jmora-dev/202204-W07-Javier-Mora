export class Character {
	constructor(name, family, age, communication = '') {
		this.name = name;
		this.family = family;
		this.age = age;
		this.isAlive = true;
		this.communication = communication;
	}

	dead() {
		this.isAlive = false;
	}

	communicate() {
		return this.communication;
	}
}
