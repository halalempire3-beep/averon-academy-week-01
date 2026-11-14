# GitHub Profile Finder

## Project Description

GitHub Profile Finder is a React application that allows users to search for GitHub profiles using the GitHub REST API.

Users can enter a GitHub username and view information about that person's GitHub account.

## Features

- Search GitHub users by username.
- Display profile picture and name.
- Display username and biography.
- Show location and company.
- Display public repositories.
- Display followers and following.
- Link to the user's GitHub profile.
- Loading indicator while searching.
- Error handling for invalid usernames.
- Validation for empty searches.
- Responsive design for mobile and desktop.

## Technologies Used

- React.js
- JavaScript
- CSS
- GitHub REST API
- React Hooks (useState and useEffect)

## API Used

GitHub Users API:

https://api.github.com/users/{username}

## How to Run the Project

1. Download or clone the project.
2. Open the project folder.
3. Install dependencies using `npm install`.
4. Start the application using `npm run dev`.
5. Open the local development link provided.

## Testing

The application was tested using:

- Valid username: `torvalds`
- Valid username: `octocat`
- Invalid GitHub username.
- Empty search input.
- Loading state during API requests.

## Learning Outcomes

Through this project, I practised:

- Fetching data from an external API.
- Using React useState and useEffect.
- Working
