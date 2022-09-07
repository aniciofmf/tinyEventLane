/* Maybe using your imagination you can turn this in a great thing someday, rofl */

import eventLane from "./event.mjs";

var eventName = "evt1";

eventLane.on(eventName, evtHandler);

eventLane.emit(eventName, {
	payload: "Surprise",
});

eventLane.emit(eventName, {
	payload: "More Surprise!",
});

eventLane.off(eventName, evtHandler);

/* No more */
eventLane.emit(eventName, {
	payload: "More and More Surprise!",
});

function evtHandler(data) {
	console.log(`I just received ${eventName} and it contains ${data.payload}`);
}
