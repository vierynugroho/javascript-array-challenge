function filterCarByAvailability(cars) {
	// Sangat dianjurkan untuk console.log semua hal hehe
	// console.log(cars);

	// Tempat penampungan hasil
	const result = [];

	// Tulis code-mu disini
	// Rubah code ini dengan array hasil filter berdasarkan availablity
	//! Cara 1
	for (let i = 0; i < cars.length; i++) {
		if (cars[i].available === true) {
			result.push(cars[i]);
		}
	}

	//! Cara 2
	// cars.forEach((car) => (car.available === true ? result.push(car) : 'Car not available'));
	console.log(result);
	return result;
}
