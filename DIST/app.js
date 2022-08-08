// initialise github class

const github = new GitHub;

// initialise ui

const ui = new UI;

// Search Input

const searchUser = document.getElementById('search-user');

// Search input event listener:

searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== '') {
        // make http call
        github.getUser(userText)
        // we need to make this parameter ('data') to attach the profile object to so it can be used in this method.
        .then(data => {
            // has own property function is used to check that the 'profile' object has a property of message and that the request returns a not found status. 
            if(data.profile.hasOwnProperty('message') && data.profile.message === 'Not Found') {
                // show alert if no user found
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile if found
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        });
    } else {
        // clear profile
        ui.clearProfile();
    }
    
});
