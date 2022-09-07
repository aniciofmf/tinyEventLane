function EventLane() {
	var listEvts = {};

	function on(evt, cb) {
		(listEvts[evt] || (listEvts[evt] = [])).push(cb);
	}

	function off(evt, cb) {
		if (listEvts[evt]) {
			listEvts[evt].splice(listEvts[evt].indexOf(cb), 1);
		}
	}

	function emit(evt, data = {}) {
		(listEvts[evt] || []).slice().map((cb) => {
			cb(data);
		});
	}

	const eventLane = {
		on,
		off,
		emit,
	};

	return eventLane;
}

var eventLane = EventLane();

export default eventLane;
