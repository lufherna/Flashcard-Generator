//exports a cloze 
exports.clozeCard = function(full, cloze, partial){
//this is the full sentence users need to remember
	this.full = full;
//text that we've chosen to remove
	this.cloze = cloze;
//text that we get if we remove the cloze deletion
	this.partial = partial;
}