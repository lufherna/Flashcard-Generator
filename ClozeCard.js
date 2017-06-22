//exports a cloze 
exports.clozeCard = function(text, cloze){
//full question 
	this.text = text;
//text that we've chosen to remove
	this.cloze = cloze;
//text that we get if we remove the cloze deletion
	this.partial = this.text.replace(cloze, '[....]');
//this is the full sentence users need to remember
	this.full = this.cloze + this.partial;
}