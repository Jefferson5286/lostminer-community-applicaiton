import {ReactElement} from 'react'
import {Link} from "react-router";
import {Stack} from "@mui/material";

interface TagListProps {
    tags: string[]
}


export default function TagList({tags}: TagListProps): ReactElement {
    return <Stack direction='row' spacing={1}>
        {tags.map(tag => {
            return <Link key={`${tag}`} to={`/gallery/tags/${tag}`} style={{fontSize: 'small'}}>
                #{tag}
            </Link>
        })}
    </Stack>
}