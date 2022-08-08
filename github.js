class GitHub {
    constructor() {
        // getting unique client ID and client secret from github application project.
        this.client_id = '4000bb33afbecaaa8c06';
        this.client_secret = '8ff81a16e870161027abba95dc9f7b681efccb76'
        // get the number of repositories we want to show
        this.repos_count = 5;
        // Sorting the repos in date order
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
    
    
}

