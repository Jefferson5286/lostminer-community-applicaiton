import {ReactElement} from 'react'
import {Link} from 'react-router'
import {Stack} from '@mui/material'
import {TagListProps} from '../../interfaces/gallery.ts'


export default function TagList({tags}: TagListProps): ReactElement {
    return <Stack direction='row' spacing={1}>
        {tags.map(tag => {
            const params = new URLSearchParams({tag: tag})

            return <Link key={`${tag}`} to={`/gallery/tags?${params}`} style={{fontSize: 'small'}}>
                #{tag}
            </Link>
        })}
    </Stack>
}