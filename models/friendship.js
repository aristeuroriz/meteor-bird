Friendships = new Meteor.Collection('friendships');

Friendships.follow = function(friendId) {
    var params = {
        userId: Meteor.userId(),
        friendId: friendId
    };
    this.insert(params);
};

Friendships.unfollow = function(friendId) {
    var params = {
        userId: Meteor.userId(),
        friendId: friendId
    };
    this.remove(params);
};

Friendships.isFollowing = function(friendId) {
    return this.findOne({
        userId: Meteor.userId(),
        friendId: friendId
    });
};

Friendships.followers = function(friendId) {
    return this.find({
        friendId: friendId
    }).count();
};
Friendships.followings = function(userId) {
    return this.find({
        userId: userId
    }).count();
};
Friendships.timelineIds = function(userId) {
    var timelineIds = this.find({
        userId: userId
    }).map(function(f) {
        return f.friendId;
    });
    timelineIds.push(userId);
    return timelineIds;
};
Friendships.followersAndFollowings = function(_id) {
    return this.find({
        $or: [{
            userId: _id
        }, {
            friendId: _id
        }]
    });
};