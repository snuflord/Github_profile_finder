class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    // show profile - takes in parameter of 'user', which is an array of all the data
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Name: ${user.name}</li>
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
              <li class="list-group-item">Bio: ${user.bio}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
    }

    // show user repos - repos is the function parameter, which is an array of all the repo data.

    showRepos(repos) {
        let output = '';

        repos.forEach(function(repo) {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                       <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>`
        });

        // Output repos
        document.getElementById('repos').innerHTML = output;
    }

    // show alert message
    showAlert(message, className) {
        // clear remaining alerts
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert ()
        container.insertBefore(div, search);
        // timeout after 3 seconds

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    // clear alert message

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}