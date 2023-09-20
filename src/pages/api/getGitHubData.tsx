import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { GitHubData, Profile, Repository } from '../../components/types';

const getGitHubData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        // Enter any valid GitHub username here
        const githubUsername = 'Antonwy';

        // Make a GET request to GitHub's REST API to fetch basic profile information
        const profileResponse = await axios.get(`https://api.github.com/users/${githubUsername}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);

        // Extract the relevant data from the response
        const { login, name, avatar_url, html_url, followers, following } = profileResponse.data;

        // Extract the repositories data from the repositories response
        const repositoriesData: [Repository] = reposResponse.data.map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            license: repo.license?.name,
            lastUpdated: new Date(repo.pushed_at), // Parse the date string into a Date object
        }));

        // Sort the array by comparing the Date objects in descending order
        repositoriesData.sort((a: any, b: any) => b.lastUpdated - a.lastUpdated);

        // Create an object with the extracted data
        const profileData: Profile = {
            username: login,
            name,
            avatarUrl: avatar_url,
            githubUrl: html_url,
            followers,
            following,
        };

        const githubData: GitHubData = {
            profile: profileData,
            repositories: repositoriesData,
        }

        // Send the profile data as a JSON response
        console.log("server", githubData);
        res.status(200).json(githubData);
    } catch (error) {
        // Handle errors gracefully
        res.status(500).json({ error: 'Unable to fetch GitHub profile data' });
    }
};

export default getGitHubData;