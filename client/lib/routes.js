Router.route('/', function() {
	this.layout('layout');
    this.render(
    	'home', {
        data: function() {
            return {
                posts: Post.list(Meteor.userId())
            }
        }
    });
});