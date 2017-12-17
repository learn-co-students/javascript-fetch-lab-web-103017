const token = 'd3b31f9fb1e049fd7ee4cf3e6650d750afd41e55';


function getIssues() {
  fetch(`https://api.github.com/repos/bmcilhenny/javascript-fetch-lab/issues`, {
  method: 'GET',
  headers: {
    Authorization: `token ${token}`
  }
}).then(resp => resp.json()).then(json => {
  showIssues(json);
})
}

function showIssues(json) {
  console.log(json)
  let issues = document.getElementById('issues')
  for (var i = 0; i < json.length; i++) {
    let div = document.createElement('div')
    div.innerHTML = `<h1>${json[i].title}</h1> <p>${json[i].body}</p> `
    issues.appendChild(div)
  }
}


function createIssue() {
  let issueTitle = document.getElementById('title').value
  let issueText = document.getElementById('body').value

  fetch(`https://api.github.com/repos/bmcilhenny/javascript-fetch-lab/issues`, {
  method: 'post',
  headers: {
    Authorization: `token ${token}`,
  },
  body: JSON.stringify({title: issueTitle, body: issueText})
}).then(resp => getIssues())};

function showResults(json) {
  let results = document.getElementById('results')
  let p = document.createElement('p')
  p.innerHTML = json;
  results.appendChild(p)
}

function showForkedRepo(json) {
  let results = document.getElementById('results')
  let p = document.createElement('p')
  p.innerHTML = json;
  results.appendChild(p)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${token}`
    }}).then(resp => resp.json()).then(json => {
      showForkedRepo(json.full_name)
    })
  //use fetch to fork it!
}

function getToken() {
  //return token
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
