import {ReactElement} from 'react'

import AuthorAvatar from "./AuthorAvatar.tsx";
import {Stack, Typography} from "@mui/material";

interface InfoProps {
    project_id?: string | number
    avatar?: string
    author: string
    title: string
    published_at: string
}


export default function Info(props: InfoProps): ReactElement {
    const {author, avatar, title, published_at} = props

    return <Stack direction='row' spacing={1.5} sx={{ alignItems: 'center' }}>
        <AuthorAvatar author={author} profile={avatar}/>
        <Stack>
            <Typography variant="body1">{title}</Typography>
            <Typography variant="caption" sx={{ opacity: '75%' }}>
                By {author} • {published_at}
            </Typography>
        </Stack>
    </Stack>
}