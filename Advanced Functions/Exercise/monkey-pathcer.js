function solution(command) {
    let post = this;

    if (command === "upvote") {
        post.upvotes ++;
    } else if (command === "downvote") {
        post.downvotes ++;
    } else if (command === "score") {
        let result = [];
        let totalVotes = post.upvotes + post.downvotes;
        let balance = post.upvotes - post.downvotes;
        
        let rating = (function(){
            if(totalVotes < 10) {
                return "new";
            } else if (post.upvotes / totalVotes > 0.66){
                return "hot";
            } else if (balance >= 0 && (post.upvotes > 100 || post.downvotes > 100)) {
                return "controversial";
            } else if ( balance < 0) {
                return "unpopular";
            }

            return "new";
        }());

        let reportUpvotes = post.upvotes;
        let reportDownvotes = post.downvotes;

        if (totalVotes > 50) {
           let reportAddition =  Math.ceil(Math.max(reportUpvotes, reportDownvotes) * 0.25);
           reportUpvotes += reportAddition;
           reportDownvotes += reportAddition;
        }

        result.push(reportUpvotes);
        result.push(reportDownvotes);
        result.push(balance);
        result.push(rating);
        return result;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};


solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}
         //(executed 50 times)
score = solution.call(post, 'score');   
console.log();  


