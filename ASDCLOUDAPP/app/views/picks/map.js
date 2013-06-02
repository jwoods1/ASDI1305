function (doc) {
	if(doc._id.substr(0,3) === "A1:"){
		emit(doc._id.substr(3), {
			"rev":doc._rev,
			"player":doc.player,
			"race": doc.race,
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