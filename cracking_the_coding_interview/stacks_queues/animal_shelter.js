class AnimalQueue {
	constructor(params) {
		this.dogs = [];
		this.cats = [];
		this.queue = [];
	}

	enqueue(val) {
		this.queue.push(val);
		val === 'dog' ? this.dogs.push(val) : this.cats.push(val);
	}

	dequeuAny() {
		let val = this.queue[0];
		this.queue = this.queue.splice(1);
		if (val === 'dog') {
			let dog = this.dogs[0];
			this.dogs = this.dogs.splice(1);
		} else {
			let cat = this.cats[0];
			this.cats = this.cats.splice(1);
		}

		return val;
	}

	dequeueDog() {
		if (!this.dogs.length) {
			return null;
		}
		let val = this.dogs.unshift(),
			i = 0,
			newQueue = [];
		this.dogs = this.dogs.splice(1);
		while (true) {
			let animal = this.queue[0];
			this.queue = this.queue.splice(1);
			if (animal === 'dog') {
				this.queue = newQueue.concat(this.queue);
				break;
			} else {
				newQueue.push(animal);
			}
		}
		return val;
	}

	dequeueCat() {
		if (!this.cats.length) {
			return null;
		}
		let val = this.cats.unshift(),
			i = 0,
			newQueue = [];
		this.cats = this.cats.splice(1);
		while (true) {
			let animal = this.queue[0];
			this.queue = this.queue.splice(1);
			if (animal === 'cat') {
				this.queue = newQueue.concat(this.queue);
				break;
			} else {
				newQueue.push(animal);
			}
		}
		return val;
	}
}

let animals = new AnimalQueue();
animals.enqueue('cat');
animals.enqueue('dog');
animals.enqueue('dog');

animals.dequeueDog();
animals.dequeuAny();
animals.enqueue('cat');
animals.dequeueCat();
let pause;
