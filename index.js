function getIssues() {
  fetch("https://api.github.com/repos/wassi12495/javascript-fetch-lab-web-103017/issues",{
    method: "GET",
    header: {
      Authorization: `token ${getToken()}`
    },
  })
  .then(resp => resp.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  let issueDiv = document.getElementById("issues")
  console.log(json)

  issueDiv.innerHTML += `Title: ${json.title} <br> Body: ${json.body} <br>`

}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value
  let jsonBody = {title: title, body: body}
  fetch(`https://api.github.com/repos/wassi12495/javascript-fetch-lab-web-103017/issues`,{
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(jsonBody)
  })
  .then(getIssues())
  // .then(resp => resp.json())
  // .then(json => getIssues(json))
}

function showResults(json) {
  console.log(json)
   document.getElementById("results").innerHTML = `<a href=${json.url}>${json.url}</a>`

}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers:{
    Authorization: `token ${getToken()}`
  }
  })
  .then(resp => resp.json())
  .then(json => showResults(json));
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
