import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, TextInput, Text, ActionList } from "@primer/react"
import { MarkGithubIcon } from '@primer/octicons-react'


export default function Home() {
  const router = useRouter();
  const [gitHubId, setGitHubId] = useState('');
  const [emptyAlert, setEmptyAlert] = useState(false);

  const handleGitHubIdChange = (e: any) => {
    setGitHubId(e.target.value);
  };

  const handleRepositoriesPageNavigation = () => {
    // Use Next.js router to navigate to the reositories page with dynamic route
    if (gitHubId === '') {
      setEmptyAlert(true);
      return;
    }
    router.push(`/repositories/${gitHubId}`);
  };

  return (
    <Box backgroundColor="#f9f9f9" width="100%" height="100vh">
      <Box display="flex" flexDirection="column" alignItems="center" pt={8}>
        <span style={{ color: "#000000" }}><MarkGithubIcon size={48} /></span>
        <Text fontSize={"1.5em"} fontWeight={300} color="#333" mt={5}>Hey there 👋</Text>
        <Box borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2} backgroundColor="#fff" width={["90%", "80%", "350px", "400px"]} mt={5} sx={{ boxSizing: "border-box", padding: "20px" }}>
          <Text >Welcome to my interpretation of the mvst coding challenge! Start by entering a GitHub username or choose one of the presets.</Text>
          <Text as="p" fontWeight="bold" mt={3}>Enter a username</Text>
          <TextInput aria-label="Search" name="search" value={gitHubId} onChange={handleGitHubIdChange} width="100%" sx={{ mt: 2 }} placeholder={emptyAlert ? "Enter username here!" : ""} validationStatus={emptyAlert ? "error" : undefined}/>
          <Text as="p" fontWeight="bold" mt={3}>Or choose a preset</Text>
          <Box sx={{ display: 'flex', gap: ['4px', '4px', '4px'], mb: 3, mt: 2 }}>
            <Button onClick={() => { setGitHubId('leerob'); router.push(`/repositories/leerob`); }} sx={{ boxSizing: "border-box", width:"100%" }}>leerob</Button>
            <Button onClick={() => {setGitHubId('octocat'); router.push(`/repositories/octocat`)}} sx={{ boxSizing: "border-box", width:"100%" }}>octocat</Button>
            <Button onClick={() => {setGitHubId('mvstgmbh'); router.push(`/repositories/mvstgmbh`)}} sx={{ boxSizing: "border-box", width:"100%" }}>mvst</Button>
          </Box>
          <ActionList.Divider />
          <Button block variant='primary' onClick={handleRepositoriesPageNavigation} sx={{ mt: 3 }}>View Repositories</Button>
        </Box>
      </Box>
    </Box>
  )
}
