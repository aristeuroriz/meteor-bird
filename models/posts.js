Post = new Meteor.Collection('posts');

Post.publish = function(message, name) {
	var params = {
		message: message,
		time: new Date(),
		userId: Meteor.userId(),
		name: name
	};
	this.insert(params);
};

Post.list = function(userId) {
	return this.find({userId: userId});
};

