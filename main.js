const listRepos = async username => {
  // get all the repos of an account
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    // just for the first promise
    .then(res => res.json())
    .catch(error => console.error(error));

  // create markup for the data
  const markup = repos
    .map(
      repo => `
        <li>
          <a href="${repo.html_url}">${repo.name}</a>
          (⭐️ ${repo.stargazers_count})
        </li>
      `
    )
    // trasform list into a string
    .join('');

  // retrieve the #content div to inject the new markup
  const content = document.getElementById('content');

  content.innerHTML = `<ul>${markup}</ul>`;
};

listRepos('simotae14');