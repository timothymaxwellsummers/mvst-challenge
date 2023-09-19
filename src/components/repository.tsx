import { Link, Box, ActionList } from "@primer/react"

export default function Repository(props: any) {
    return (
        <>
            <Box sx={{ display: 'flex', gap: ['24px', '24px', '24px'], pt: 3 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Link href="https://github.com" sx={{ fontSize: "1.25em", fontWeight: 500 }}>{props.children}</Link>
                </Box>
                <Box sx={{ pt: 5 }} width={['100px', '100px', '100px']}>

                </Box>
            </Box>
            <ActionList.Divider />
        </>
    )
}
