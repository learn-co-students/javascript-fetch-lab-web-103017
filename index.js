const repo = 'cutterbuck/javascript-fetch-lab'

function getIssues() {
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  // debugger
  // console.log(json)
  document.getElementById("issues").innerHTML += `<ul><li>${json.title}</li><li>${json.body}</li></ul>`
}

function createIssue() {
  let title = document.getElementById("title").value
  let text = document.getElementById("body").value

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify({
      title: `${title}`,
      text: `${text}`
    })
  }).then(resp => resp.json())
  .then(json => showIssues(json))
}

function showResults(json) {
  let results = document.getElementById("results")
  let div = document.createElement('div')
  div.innerHTML = json
  results.appendChild(div)

}

function showForkedRepo(json) {
  let results = document.getElementById("results")
  let div = document.createElement('div')
  div.innerHTML = json
  results.appendChild(div)

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
   }}).then(resp => resp.json()).then(json => showForkedRepo(json))
}

function getToken() {
  //return token
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
