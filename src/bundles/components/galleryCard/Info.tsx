import {ReactElement} from 'react'

import {Avatar, Stack, Typography} from '@mui/material'
import styled from 'styled-components'
import {useNavigateState} from '../../hooks.ts'
import {InfoProps} from '../../interfaces/gallery.ts'

const AuthorHyperLink = styled.span`
    &:hover {text-decoration: underline;}
`

export default function Info(props: InfoProps): ReactElement {
    const {author, title, published_at, project_id} = props

    const navigateAuthorProfile: () => void = useNavigateState(`/${author.username}/profile`, {user_id : author.id})
    const navigateProject: () => void = useNavigateState(`/gallery/${title.replace(' ', '+')}`, {project_id: project_id})

    return <Stack direction='row' spacing={1.5} sx={{alignItems: 'center'}}>
        <Avatar onClick={navigateAuthorProfile}>
            {!author.profileImage ? author.username.charAt(0) : (
                <img src={author.profileImage} alt={`${author.username} profile image`}/>
            )}
        </Avatar>
        <Stack>
            <Typography
                onClick={navigateProject}
                sx={{':hover': {textDecoration: 'underline'}}}
                variant="body1">
                {title}
            </Typography>
            <Typography variant="caption" sx={{ opacity: '75%' }}>
                <AuthorHyperLink onClick={navigateAuthorProfile}>
                    By {author.username}
                </AuthorHyperLink> • {published_at}
            </Typography>
        </Stack>
    </Stack>
}