class Utils {
	
	constructor() {

	}

	stringContains(string1, string2) {
		return string1.indexof(string2) >= 0;
	}

	isEmptyJsonObject(obj) {
		return !Object.keys(obj).length > 0;
	}

	isJsonString(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}

}

var utils = new Utils();

module.exports = utils;