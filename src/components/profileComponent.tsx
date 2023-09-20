import { Button, ActionList, Heading, Text } from "@primer/react"
import { PeopleIcon } from '@primer/octicons-react'
import indexStyles from "../styles/index.module.css";
import statusIconMock from '../../public/statusIconMock.png'
import { Profile } from '../components/types';


export default function ProfileComponent({ profile }: { profile: Profile }) {
  return (
    <>
      {profile &&
        <>
          <div className={indexStyles.imageWrapper}>
            <img src={profile.avatarUrl!} alt="profilePicMock" className={indexStyles.profileImage} />
            <img src={statusIconMock.src} alt="profilePicMock" className={indexStyles.statusIcon} />
          </div>
          <Heading sx={{ fontSize: "1.5em" }}>{profile.name}</Heading>
          <Text sx={{ color: '#6e7781', fontSize: "1.25em", fontWeight: 300, lineHeight: "1em" }}>{profile.username}</Text>
        </>
      }
      <Button block sx={{ my: 3 }}>
        Unfollow
      </Button>
      {profile &&
        <>
          <Text sx={{ color: '#6e7781', fontSize: "0.875em", fontWeight: 400, lineHeight: "1.5em" }}><PeopleIcon size={16} /> <Text sx={{ color: '#000000', fontWeight: 600 }}>{profile.followers}</Text> followers · <Text sx={{ color: '#000000', fontWeight: 600 }}>{profile.following}</Text> following</Text>
        </>
      }
      <ActionList.Divider />
    </>
  )
}
