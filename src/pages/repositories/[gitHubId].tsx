import React, { useState, useEffect, ChangeEvent } from 'react';
import { Box, Button, TextInput, ActionList, Heading } from "@primer/react";
import { TriangleDownIcon } from '@primer/octicons-react';
import indexStyles from "../../styles/index.module.css";
import RepositoryComponent from "../../components/repository";
import Navigation from "../../components/profileNavigation";
import ProfileComponent from "../../components/profileComponent";
import ErrorComponent from "../../components/error";
import { GitHubData } from '../../components/types';
import { useRouter } from 'next/router';

export default function Repositories() {
  const router = useRouter();
  const { gitHubId } = router.query;
  const [gitHubData, setGitHubData] = useState<GitHubData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch GitHub data when the page loads
    if (gitHubId) {
      getGitHubData();
    }
  }, [gitHubId]);

  const getGitHubData = async () => {
    try {
      const res = await fetch('../../api/getGitHubData', {
        method: 'POST',
        body: JSON.stringify({ gitHubId }),
      });
      if (res.ok) {
        // If the response is successful, parse JSON and set data
        const githubData = await res.json();
        setGitHubData(githubData);
        setError(null); // Clear any previous error
      } else {
        // Handle cases where response is not OK (e.g., user not found)
        setError('Either there was an error or this user does not exist :/');
      }
    } catch (error) {
      // Handle unexpected errors during data fetching
      console.error('Error fetching GitHub data', error);
      setError('An unexpected error occurred :/');
    }
  }

  // Filter repositories based on the search query
  const filteredRepositories = gitHubData?.repositories?.filter(repository =>
    repository.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <>
      {error ? (
        <>
          {/* Display an error component if there's an error*/}
          <ErrorComponent error={error} />
        </>
      ) : gitHubData?.profile && gitHubData?.repositories && (
        <>
          <Navigation repos={gitHubData.profile.repos} />
          <Box sx={{ display: 'flex', gap: ['24px', '24px', '24px'], px: [3, 3, 5, 5], pt: 2, pb: 5, flexDirection: ["column", "column", "row", "row"], maxWidth: '1280px', margin: '0 auto', }}>
            <Box sx={{ pt: 5, minWidth: ['100%', '100%', '256px', '296px'] }} width={['220px', '256px', '296px']}>
              {/* Render the profile component with fetched data */}
              <ProfileComponent profile={gitHubData.profile} />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', gap: ['4px', '4px', '4px'], pt: 3, pb: 2, flexDirection: ["column", "column", "row", "row"] }}>
                <TextInput
                  aria-label="Search"
                  name="search"
                  placeholder="Find a repository..."
                  value={searchQuery}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  sx={{ mr: [0, 0, 3, 3] }}
                  width="100%"
                />

                <Box sx={{ display: 'flex', gap: ['4px', '4px', '4px'], mt: [1, 1, 0, 0] }}>
                  <Button trailingIcon={TriangleDownIcon}>
                    Type
                  </Button>
                  <Button trailingIcon={TriangleDownIcon}>
                    Language
                  </Button>
                  <Button trailingIcon={TriangleDownIcon}>
                    Sort
                  </Button>
                </Box>

              </Box>
              <ActionList.Divider />
              {gitHubData.repositories.length === 0 && (
                <>
                  {/* Display a message if there are no repositories*/}
                  <Heading sx={{ fontSize: "1.5em" }}>{gitHubData.profile.name} does&apos;t have any public repositories yet.</Heading>
                </>
              )}
              {filteredRepositories.map((repository, index) => (
                <div className={indexStyles.element} key={index}>
                  {/* Render the repository component for each filtered repository */}
                  <RepositoryComponent repository={repository} />
                </div>
              ))}
            </Box>
          </Box>
          <ActionList.Divider sx={{ mx: 3 }} />
        </>
      )}
    </>
  );
}
