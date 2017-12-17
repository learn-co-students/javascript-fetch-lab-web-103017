function getIssues() {
  const myUrl = "psarma89/javascript-fetch-lab"
  fetch(`https://api.github.com/repos/${myUrl}/issues`,{
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    // console.log(json)
    showIssues(json)
  })
}

function showIssues(json) {
  const div = document.querySelector('div#issues')
  json.forEach(function(issue){
    const p = document.createElement('p')
    p.innerText = `${issue.title} - ${issue.body}`
    div.appendChild(p)
  })
}

function createIssue() {
  const titleInput = document.querySelector('input#title')
  const bodyInput = document.querySelector('input#body')

  const postData = {
    title: titleInput.value,
    body: bodyInput.value
  }

  if (title && body) {
    const myUrl = "psarma89/javascript-fetch-lab"
    fetch(`https://api.github.com/repos/${myUrl}/issues`, {
      method: 'post',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
  }
  getIssues()
}

function showResults(json) {
  const div = document.querySelector('div#results')
  const aTag = document.createElement('a')
  aTag.innerText = "Click to go to Forked repo"
  aTag.setAttribute("href", json.html_url);
  div.appendChild(aTag)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => {
    showResults(json)
    // console.log(json.url)
  })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
