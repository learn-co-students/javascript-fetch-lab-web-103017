function getIssues() {
  const repo = 'c0nniewang/javascript-fetch-lab'
  const token = getToken()
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(function(json) {
    showIssues(json)
  })
}

function showIssues(json) {
  document.getElementById("issues").innerHTML += `<ul><li>${json.title}</li><li>${json.body}</li></ul>`
}

function createIssue() {
  const title = document.getElementById("title").value
  const text = document.getElementById("body").value
  const repo = 'c0nniewang/javascript-fetch-lab'
  const token = getToken()

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    },
    body: JSON.stringify({"title": `${title}`, "body": `${text}`})
  }).then(res => res.json()).then(function(json) {
    showIssues(json)
  })
}

function showResults(json) {
  document.getElementById("results").innerHTML = `<h1>${json.name}</h1><br><p>${json.description}</p>`
}

function showForkedRepo(json) {
  document.getElementById("results").innerHTML += `<a href="${json.svn_url}">GitHub Fork Link</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const owner = 'c0nniewang'
  const token = getToken();
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(function(json) {
    showResults(json) 
    showForkedRepo(json)
  });
}

function getToken() {
  return ''
}
