import {ReactElement} from 'react'

import {Stack} from '@mui/material'

import CardMenuButton from './CardMenuButton'
import Info from './Info'
import Thumbnail from './Thumbnail'
import TagList from './TagList'
import {ContentCardProps} from '../../interfaces/gallery.ts'


export default function Card(props: ContentCardProps): ReactElement {
    const {id, thumbnail, title, published_at, tags, author} = props

    return (
        <Stack spacing={1} sx={{minWidth: 285, maxWidth: 400, aspectRatio: '15/9', cursor: 'pointer'}}>
            <Thumbnail src={thumbnail} alt={`thumbnail of ${title} project`}/>
            <Stack direction='row' sx={{alignItems: 'center', justifyContent: 'space-between'}}>
                <Info
                    project_id={id}
                    author={author}
                    title={title}
                    published_at={published_at}
                />
                <CardMenuButton project_id={id}/>
            </Stack>
            <TagList tags={tags}/>
        </Stack>
    )
}
