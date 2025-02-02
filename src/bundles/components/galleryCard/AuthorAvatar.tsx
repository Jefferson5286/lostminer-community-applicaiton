import {ReactElement} from 'react'
import {Avatar} from '@mui/material'


interface AuthorAvatarProps {
    author: string
    profile?: string
}

export default function AuthorAvatar({author, profile}: AuthorAvatarProps): ReactElement {
    return <Avatar>
        {!profile ? author.charAt(0) : (
            <img src={profile} alt={`${author} profile image`}/>
        )}
    </Avatar>
}