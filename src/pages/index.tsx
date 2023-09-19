import { Box, Button, TextInput, ActionList, Heading, Text } from "@primer/react"
import { TriangleDownIcon } from '@primer/octicons-react'
import profilePicMock from '../../public/profilePicMock.png'
import statusIconMock from '../../public/statusIconMock.png'
import indexStyles from "../styles/index.module.css";
import Repository from "../components/repository"
import Navigation from "../components/profileNavigation"

export default function Home() {

  const repositories = ["repo 1", "repo 2", "repo 3"]

  return (
    <>
      <Navigation />
      <Box sx={{ display: 'flex', gap: ['24px', '24px', '24px'], px: 5, pt: 2, flexDirection: ["column", "column", "row", "row"] }}>
        <Box sx={{ pt: 5 }} width={['220px', '256px', '296px']}>
          <div className={indexStyles.imageWrapper}>
            <img src={profilePicMock.src} alt="profilePicMock" className={indexStyles.profileImage} />
            <img src={statusIconMock.src} alt="profilePicMock" className={indexStyles.statusIcon} />
          </div>
          <Heading sx={{ fontSize: "1.5em" }}>Timothy</Heading>
          <Text sx={{ color: '#6e7781', fontSize: "1.25em", fontWeight: 300, lineHeight: "1em"}}>tim1299</Text>
          <Button sx={{ width: '100%', my: 3 }}>
              Unfollow
          </Button>
          <ActionList.Divider />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', gap: ['4px', '4px', '4px'], pt: 3, pb: 2 }}>
            <TextInput aria-label="Search" name="search" placeholder="Find a repository..." sx={{ mr: 3 }} width="100%" />
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
          <ActionList.Divider />
          {repositories.map((repository, index) => (
                  <Repository key={index}>{repository}</Repository>
                ))}
        </Box>
      </Box>
    </>
  )
}
