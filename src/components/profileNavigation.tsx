import { UnderlineNav } from "@primer/react/drafts"
import { RepoIcon, BookIcon, TableIcon, PackageIcon, StarIcon } from '@primer/octicons-react'


export default function Navigation() {
    return (
        <>
            <UnderlineNav aria-label="Repository" sx={{ bg: '#f6f8fa' }}>
                <UnderlineNav.Item icon={BookIcon}>Overview</UnderlineNav.Item>
                <UnderlineNav.Item aria-current="page" counter={16} icon={RepoIcon}>Repositories</UnderlineNav.Item>
                <UnderlineNav.Item icon={TableIcon}>Projects</UnderlineNav.Item>
                <UnderlineNav.Item icon={PackageIcon}>Packages</UnderlineNav.Item>
                <UnderlineNav.Item icon={StarIcon}>Stars</UnderlineNav.Item>
            </UnderlineNav>
        </>
    )
}
