// dummy database
const post1 = {id: 1, 
    title: "POST TITLE 1", 
    body: 'Here is my body do with is as you want'}

const post2 = {id: 2, 
    title: "TITLE 2", 
    body: 'BODY BODY BODY'}

const post3 = {id: 3, 
    title: "TITLE 3", 
    body: 'BODY3'}

const allPosts = [post1, post2, post3]


module.exports = {
    posts: function(req, res) {
        res.send(allPosts)
    },

    create: function(req, res){
        const title = req.param('title')
        const body = req.param('body')
        console.log(title + " " + body)

        sails.log.warn(title + " " + body)

        const newPosts = {id: 4, 
            title: title, 
            body: body}
        allPosts.push(newPosts)

        res.end()
    },

    findById: function(req, res){
        const postId = req.param('postId')

        const filteredPosts = allPosts
            .filter(p => {return p.id == postId})

        // const filteredPosts = allPosts.filter(this.function(p)){
        //     return p.id == postId
        // }    
        //  long hand version of two lines above

        if (filteredPosts.length > 0){
            res.send(filteredPosts[0])
        }else{
            res.send('Failed to find post by id: ' + postId)
        }
        
        res.send(postId)
    }
}