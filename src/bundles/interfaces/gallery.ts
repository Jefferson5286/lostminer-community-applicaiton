import {IAuthor} from './generics.ts'

// Thumbnail
export interface ThumbnailProps {
    src?: string
    alt: string
}

// TagList
export interface TagListProps {
    tags: string[]
}

// Info
export interface InfoProps {
    project_id: string | number
    author: IAuthor
    title: string
    published_at: string
}

// MenuButton
export interface MenuButtonProps {
    project_id: string | number
}

// Card
export interface ContentCardProps {
    id: string | number
    thumbnail?: string
    description?: string
    author: IAuthor
    title: string
    published_at: string
    tags: string[]
}