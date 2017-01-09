const sessions = {};

class Session {

	constructor() {
	}

	getSessions() {
		return sessions;
	}

	findOrCreateSession(sessionId) {
		let sessionId;
  		// Let's see if we already have a session for the user fbid
  		Object.keys(sessions).forEach(k => {
    		if (k === sessionId) {
      			// Yep, got it!
	      		sessionId = k;
    		}
  		});
  		if (!sessionId) {
    		// No session found for user fbid, let's create a new one
    		sessionId = new Date().toISOString();
    		sessions[sessionId] = {
    			sessionId: sessionId
    		};
  		}
  		return sessionId;
	}
}

var sessions = new Session();

module.exports = sessions;