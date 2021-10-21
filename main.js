 // camelCase PascalCase snake_case

const linksSocialMedia = {
  github: "henriquenery1",
  youtube: "henriquenery",
  facebook: "henriquenery",
  instagram: "henriquenery",
  twitter: "henriquenery"
  }

  
function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
      const social = li.getAttribute('class')
      li.children[0].href = `https://www.${social}.com/`
    }
  }
  
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userLink.href = data.html_url
    userLogin.textContent = data.login
    userImage.src = data.avatar_url
  })
}

getGitHubProfileInfos()