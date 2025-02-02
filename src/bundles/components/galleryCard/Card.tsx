import {ReactElement} from 'react'

import {Stack} from '@mui/material'

import CardMenuButton from './CardMenuButton'
import Info from './Info'
import Thumbnail from './Thumbnail'
import TagList from './TagList'


interface ContentCardProps {
    id: string | number
    thumbnail?: string
    avatar?: string
    description?: string
    author: string
    title: string
    published_at: string
    tags: string[]
}


export default function Card(props: ContentCardProps): ReactElement {
    const {id, thumbnail, title, author, published_at, avatar, tags} = props

    return (
        <Stack spacing={1} sx={{minWidth: 285, maxWidth: 400, aspectRatio: '15/9',}}>
            <Thumbnail src={thumbnail} alt={`thumbnail of ${title} project`}/>
            <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                <Info
                    project_id={id}
                    avatar={avatar}
                    title={title}
                    author={author}
                    published_at={published_at}
                />
                <CardMenuButton project_id={id}/>
            </Stack>
            <TagList tags={tags}/>
        </Stack>
    )
}
