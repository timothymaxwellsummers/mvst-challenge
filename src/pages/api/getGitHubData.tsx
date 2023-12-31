import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { GitHubData, Profile, Repository } from '../../components/types';

const getGitHubData = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        
        // Extract the GitHub ID from the request body
        const body = JSON.parse(req.body);
        const { gitHubId } = body;

        // Make a GET request to GitHub's REST API to fetch basic profile information
        const profileResponse = await axios.get(`https://api.github.com/users/${gitHubId}`);
        const reposResponse = await axios.get(`https://api.github.com/users/${gitHubId}/repos`);

        // Extract the relevant data from the response
        const { login, name, avatar_url, html_url, followers, following, company, location, email, bio, twitter_username, public_repos } = profileResponse.data;

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
            company,
            location,
            email,
            bio,
            twitterUsername: twitter_username,
            repos: public_repos,
        };

        const githubData: GitHubData = {
            profile: profileData,
            repositories: repositoriesData,
        }

        // Send the profile data as a JSON response
        res.status(200).json(githubData);
    } catch (error) {
        // Handle errors gracefully :P
        res.status(500).json({ error: 'Unable to fetch GitHub profile data' });
    }
};

export default getGitHubData;