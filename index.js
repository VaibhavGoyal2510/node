require('dotenv').config()
const express = require('express');
const app = express()
// const PORT = 3000


app.get('/',(req,res)=>{
    // <>'<h1>Hello Ji, Kese Ho Saare..?</h1>'</>
    res.send('<h1>Hello Ji</h1>')
})

const githubData ={
  "login": "VaibhavGoyal2510",
  "id": 115419172,
  "node_id": "U_kgDOBuEoJA",
  "avatar_url": "https://avatars.githubusercontent.com/u/115419172?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/VaibhavGoyal2510",
  "html_url": "https://github.com/VaibhavGoyal2510",
  "followers_url": "https://api.github.com/users/VaibhavGoyal2510/followers",
  "following_url": "https://api.github.com/users/VaibhavGoyal2510/following{/other_user}",
  "gists_url": "https://api.github.com/users/VaibhavGoyal2510/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/VaibhavGoyal2510/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/VaibhavGoyal2510/subscriptions",
  "organizations_url": "https://api.github.com/users/VaibhavGoyal2510/orgs",
  "repos_url": "https://api.github.com/users/VaibhavGoyal2510/repos",
  "events_url": "https://api.github.com/users/VaibhavGoyal2510/events{/privacy}",
  "received_events_url": "https://api.github.com/users/VaibhavGoyal2510/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2022-10-09T16:41:56Z",
  "updated_at": "2025-06-16T06:14:36Z"
}

app.get('/github',(req,res)=>{
    res.send(githubData)
})

app.listen(process.env.PORT,()=>{
    console.log('Listening On Port ',process.env.PORT,`http://localhost:${process.env.PORT}`)
})