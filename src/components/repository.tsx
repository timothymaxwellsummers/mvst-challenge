import { Link, Box, ActionList, Label, Text, ButtonGroup, Button, IconButton } from "@primer/react"
import { TriangleDownIcon, StarIcon, LawIcon } from '@primer/octicons-react'
import { Repository } from '../components/types';

//stores all github colors for languages
const languageColors = require('../styles/colors.json');

export default function RepositoryComponent({ repository }: { repository: Repository }) {

    //formats the date to a more readable format
    const formattedDate = repository.lastUpdated.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

    return (
        <>
            <Box sx={{ display: 'flex', gap: ['24px', '24px', '24px'], py: 3 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="https://github.com" sx={{ fontSize: "1.25em", fontWeight: 500 }}>{repository.name}</Link>
                        <Label sx={{ ml: 2, color: '#6e7781' }}>Public</Label>
                    </div>
                    <div style={{ width: "70%", paddingRight: "1rem" }}>
                        <Text sx={{ color: '#646d76', fontSize: "0.875em", fontWeight: 400, lineHeight: "1.5" }}>{repository.description}</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: "1rem" }}>
                        {getColorCircle(languageColors[repository.language!]?.color || null)}
                        {repository.language && <Text sx={{ color: '#646d76', fontSize: "0.75em", fontWeight: 400, lineHeight: "1.5", display: 'inline-block', pl: 1, pr: 3 }}>{repository.language}</Text>}
                        {repository.license && <Text sx={{ color: '#646d76', fontSize: "0.75em", fontWeight: 400, lineHeight: "1.5", display: 'inline-block', pr: 3 }}><LawIcon size={16} /> {repository.license}</Text>}
                        <Text sx={{ color: '#646d76', fontSize: "0.75em", fontWeight: 400, lineHeight: "1.5", display: 'inline-block' }}> Updated on {formattedDate}</Text>
                    </div>
                </Box>
                <Box sx={{}} width={['150px', '150px', '150px']}>
                    <ButtonGroup sx={{float: 'right' }}>
                        <Button sx={{ minWidth: "75px" }} size="small" leadingIcon={StarIcon}> &nbsp;&nbsp;Star </Button>
                        <IconButton sx={{ minWidth: "35px", color: '#646d76' }} size="small" aria-label="Drop down" icon={TriangleDownIcon} />
                    </ButtonGroup>
                </Box>
            </Box>
            <ActionList.Divider />
        </>
    )
}


function getColorCircle(color: any) {
    if (!color) {
        return null;
    }
    return (
        <Box
          borderWidth="1px"
          borderStyle="solid"
          bg={color}
          borderColor={color}
          width={12}
          height={12}
          borderRadius={10}
        />
    );
}