class Constants {

	constructor() {
		this.PORT = process.env.PORT || 3000;
	}
}

var constants = new Constants();

module.exports = constants;