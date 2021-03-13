function shout(shoutString) {
	return shoutString.toUpperCase();
	}

function whisper(whisperString) {
	return whisperString.toLowerCase();
	}

function logShout(shoutLog) {
	console.log(shoutLog.toUpperCase());
	}

function logWhisper(whisperLog) {
	console.log(whisperLog.toLowerCase());
	}

function sayHiToGrandma(hiGrandma) {
	switch (true) {
		case (hiGrandma === hiGrandma.toLowerCase()): return "I can't hear you!";
		case (hiGrandma === hiGrandma.toUpperCase()): return "YES INDEED!";
		case (hiGrandma === "I love you, Grandma."): return "I love you, too.";
		default: return "String does not match tested values, please try again.";
		}
	}

