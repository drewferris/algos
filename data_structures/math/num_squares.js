var numSquares1 = function (n) {
	let square_nums = {}

	function is_divided_by(n, count) {
		if (count === 1) {
			if (square_nums[n]) {
				return true
			} else {
				return false
			}
		}

		for (const square in square_nums) {
			if (is_divided_by(n - square, count - 1)) {
				return true
			}
		}

		return false
	}

	// collect square less then n
	for (let i = 0; i * i <= n; i++) {
		square_nums[i * i] = true
	}

	let count = 1

	// iterating the size of combination (named count) from one to n, we check if the number n can be divided by the sum of the combination, i.e. is_divided_by(n, count).
	for (; count <= n; count++) {
		if (is_divided_by(n, count)) break
	}

	return count
}

/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
	let square_nums = [],
		queue = {},
		level = 0

	for (let i = 1; i * i <= n; i++) {
		square_nums.push(i * i)
	}

	queue[n] = n;

	while (Object.keys(queue).length) {
		level += 1

		let next_queue = {};
		let keys = Object.keys(queue);

		for (let i = 0; i < keys.length; i++) {
			const remainder = queue[keys[i]];
			for (let square of square_nums) {
				if (remainder === square) {
					return level;
				} else if (remainder < square) {
					break
				} else {
					next_queue[remainder - square] = remainder - square;
				}
			}
		}

		queue = next_queue
	}

	return level
}
