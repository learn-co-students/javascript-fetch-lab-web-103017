const token = '759732c716cad0c526885766dfbf5ded4e7202ff'
const repo = 'sethbass14/javascript-fetch-lab'

// fetch('https://api.github.com/user/repos', {
//   headers: {
//     Authorization: `token ${token}`
//   }
// }).then(res => res.json()).then(json => console.log(json));


function getIssues() {
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    },
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  console.log(json)
 const issuesDiv = document.getElementById('issues')
 let pId = 0
 json.forEach(function(issue){
   const issuesP = document.createElement('p')
   issuesP.innerHTML = `${issue['title']} <br> ${issue['body']}`
   issuesP.id = `pid:${++pId}`
   if (!document.getElementById(`${issuesP.id}`)) {
    issuesDiv.appendChild(issuesP)
  }
 })
}

function createIssue() {
  const title = document.getElementById("title").value
  const body = document.getElementById("body").value
  const issueData = {
    title: title,
    body: body
  }
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {
      Authorization: `token ${token}`
    }
  })
  getIssues()
}

function showResults(json) {
  const div = document.getElementById('results')
  const a = document.createElement('a')
  a.href = json["html_url"]
  a.innerHTML = json["full_name"]
  a.target = 'blank'
  div.appendChild(a)
}

function forkRepo() {
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${token}`
    },
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ""
}
