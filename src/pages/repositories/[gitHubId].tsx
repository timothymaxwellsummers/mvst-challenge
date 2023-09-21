import { Box, Button, TextInput, ActionList } from "@primer/react"
import { TriangleDownIcon } from '@primer/octicons-react'
import indexStyles from "../../styles/index.module.css";
import RepositoryComponent from "../../components/repository"
import Navigation from "../../components/profileNavigation"
import ProfileComponent from "../../components/profileComponent";
import { useState, useEffect } from 'react';
import { GitHubData } from '../../components/types';
import { useRouter } from 'next/router';

export default function Repositories() {

  const router = useRouter()
  const { gitHubId } = router.query;
  const [gitHubData, setGitHubData] = useState<GitHubData>();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch GitHub data when the page loads
    if (gitHubId) {
      console.log("client", gitHubId);
      getGitHubData();
    }
  }, [gitHubId]);

  const getGitHubData = async () => {
    const res = await fetch('../../api/getGitHubData', {
      method: 'POST',
      body: JSON.stringify({ gitHubId }),
    })
    const githubData = await res.json()
    console.log("client", githubData);
    setGitHubData(githubData);
  }

  // Filter repositories based on the search query
  const filteredRepositories = gitHubData?.repositories?.filter(repository =>
    repository.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <>
      {gitHubData &&
        <>
          <Navigation repos={gitHubData.profile.repos} />
          <Box sx={{ display: 'flex', gap: ['24px', '24px', '24px'], px: [3, 3, 5, 5], pt: 2, pb: 5, flexDirection: ["column", "column", "row", "row"] }}>
            <Box sx={{ pt: 5, minWidth: ['100%', '100%', '256px', '296px'] }} width={['220px', '256px', '296px']}>
              {gitHubData &&
                <ProfileComponent profile={gitHubData.profile} />
              }
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: 'flex', gap: ['4px', '4px', '4px'], pt: 3, pb: 2, flexDirection: ["column", "column", "row", "row"] }}>
                <TextInput aria-label="Search" name="search" placeholder="Find a repository..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{ mr: 3 }} width="100%" />
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
              {filteredRepositories.map((repository, index) => (
                <div className={indexStyles.element} key={index}>
                  <RepositoryComponent repository={repository} />
                </div>
              ))}
            </Box>
          </Box>
          <ActionList.Divider sx={{ mx: 3 }} />
        </>
      }
    </>
  )
}
