function (doc) {
	if(doc._id.substr(0,5) === "race:"){
		emit(doc._id.substr(5), {
			"Race": doc.Race,
			"first": doc.first,
			"second":doc.second,
			"third":doc.third,
			"fourth":doc.fourth,
			"fifth": doc.fifth,
			"sixth":doc.sixth,
			"seventh": doc.seventh,
			"eighth": doc.eighth,
			"ninth": doc.ninth,
			"tenth": doc.tenth
		});
	}
};