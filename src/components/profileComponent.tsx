import { Button, ActionList, Heading, Text, Box } from "@primer/react"
import { PeopleIcon, OrganizationIcon, LocationIcon, MailIcon, ArrowLeftIcon } from '@primer/octicons-react'
import profileStyles from "../styles/profile.module.css";
import twitter from '../../public/twitter.png'
import statusIconMock from '../../public/statusIconMock.png'
import { Profile } from '../components/types';
import { useRouter } from 'next/router';



export default function ProfileComponent({ profile }: { profile: Profile }) {

  const router = useRouter();

  // Function to handle the "Try a different username" button click
  const handleTryAgainClick = () => {
    // Redirect back to the index page
    router.push('/');
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: ["row", "row", "column", "column"], alignItems: ["center", "center", "flex-start", "flex-start"], gap: ['4px', '4px', '12px', '12px'] }}>
      {/* Profile Image and Name */}
        <div className={profileStyles.imageWrapper}>
          <img src={profile.avatarUrl!} alt="profilePicMock" className={profileStyles.profileImage} />
        </div>
        <div className={profileStyles.textWrapper}>
          <Heading sx={{ fontSize: "1.5em", ml: [3, 3, 0, 0] }}>{profile.name}</Heading>
          <Text sx={{ color: '#6e7781', fontSize: "1.25em", fontWeight: 300, lineHeight: "1em", ml: [3, 3, 0, 0] }}>{profile.username}</Text>
        </div>
      </Box>

      <Button block sx={{ my: 3 }}>
        Follow
      </Button>

      {/* Profile Info */}
      {profile.bio && <Text as="p" sx={{ fontSize: "1em", fontWeight: 400, lineHeight: "1.5em", pb: 3 }}>{profile.bio}</Text>}
      <Text as="p" sx={{ color: '#6e7781', fontSize: "0.875em", fontWeight: 400, lineHeight: "1.5em", mb: 5 }}><PeopleIcon size={16} /> <Text sx={{ color: '#000000', fontWeight: 600 }}>{profile.followers}</Text> followers · <Text sx={{ color: '#000000', fontWeight: 600 }}>{profile.following}</Text> following</Text>
      {profile.company && <Text as="p" sx={{ fontSize: "0.875em", fontWeight: 400, lineHeight: "1.5em", pb: 1 }}><span style={{ color: "#6e7781" }}><OrganizationIcon size={16} /></span> &nbsp;{profile.company}</Text>}
      {profile.location && <Text as="p" sx={{ fontSize: "0.875em", fontWeight: 400, lineHeight: "1.5em", pb: 1 }}><span style={{ color: "#6e7781" }}><LocationIcon size={16} /></span> &nbsp;{profile.location}</Text>}
      {profile.email && <Text as="p" sx={{ fontSize: "0.875em", fontWeight: 400, lineHeight: "1.5em", pb: 1 }}><span style={{ color: "#6e7781" }}><MailIcon size={16} /></span> &nbsp;{profile.email}</Text>}
      {profile.twitterUsername && (
        <Text as="p" sx={{ fontSize: "0.875em", fontWeight: 400, lineHeight: "1.5em", pb: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={twitter.src} alt="twitter logo" style={{ width: "16px" }} />
            &nbsp;&nbsp;
            {"@" + profile.twitterUsername}
          </div>
        </Text>
      )}
      <ActionList.Divider />
      {/* Back to home button */}
      <Button block variant='primary' onClick={handleTryAgainClick} sx={{ mt: 3 }} leadingIcon={ArrowLeftIcon}>Try a different username</Button>
    </>
  )
}
