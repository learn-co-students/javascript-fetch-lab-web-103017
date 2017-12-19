const token = ""

function getIssues() {
  fetch('https://api.github.com/repos/Josh-Stillman/javascript-fetch-lab/issues', {
  method: 'get',
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
    json.forEach(function(issue){
      let newIsh = document.createElement('p');
      newIsh.innerText = `Title: ${issue.title}, Body: ${issue.body}`;
      document.getElementById('issues').appendChild(newIsh)
    })

    // document.getElementById('issues').innerHTML = json.name
}

function createIssue(event) {

  // let title = event.target.parentElement.children[0].value
  // let body = event.target.parentElement.children[2].value

  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  const postData = {'title': title, 'body': body}

  fetch('https://api.github.com/repos/Josh-Stillman/javascript-fetch-lab/issues', {
  method: 'post',
  body: JSON.stringify(postData),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => getIssues())

}

function showResults(json) {
  document.getElementById('results').innerHTML = json.name
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!

  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
  method: 'post',
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(res => showForkedRepo(res));
}

function showForkedRepo(json) {
    document.getElementById('results').innerHTML = `<a href=${json.html_url}>${json.name}</a>`
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
