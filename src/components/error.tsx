import { useRouter } from 'next/router';
import { Box, Button, Text, ActionList } from "@primer/react"
import { MarkGithubIcon, ArrowLeftIcon } from '@primer/octicons-react'


export default function Error({error}: {error: string}) {
  const router = useRouter();

  const handleTryAgainClick = () => {
    // Redirect back to the index page
    router.push('/');
  };

  return (
    <Box backgroundColor="#f9f9f9" width="100%" height="100vh">
      <Box display="flex" flexDirection="column" alignItems="center" pt={8}>
        <span style={{ color: "#000000" }}><MarkGithubIcon size={48} /></span>
        <Text fontSize={"1.5em"} fontWeight={300} color="#333" mt={5}>Upsi 🫠</Text>
        <Box borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2} backgroundColor="#fff" width={["90%", "80%", "350px", "400px"]} mt={5} sx={{ boxSizing: "border-box", padding: "20px" }}>
          <Text as="p" mb={3}>{error}</Text>
          <ActionList.Divider />
          <Button block variant='primary' onClick={handleTryAgainClick} sx={{ mt: 3 }} leadingIcon={ArrowLeftIcon}>Try a different username</Button>
        </Box>
      </Box>
    </Box>
  )
}
