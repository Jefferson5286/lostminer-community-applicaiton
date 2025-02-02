import {ReactElement} from 'react'
import {Box, Stack, Divider} from '@mui/material'
import {useNavigate, NavigateFunction} from 'react-router'

import Card from '../components/galleryCard/Card'
import Contents from './content.json'
import FilterButtonMenu, {IChildrenItem} from '../components/FilterButtonMenu'


export default function Gallery(): ReactElement {
    const navigate: NavigateFunction = useNavigate()

    const contentTypeMenu: IChildrenItem[] = [
        {label: 'All', onRelease: (): void => {
            navigate('/gallery')
        }},
        {label: 'Textures', onRelease: (): void => {
            navigate('/gallery/textures')
        }},
        {label: 'Worlds', onRelease: (): void => {
            navigate('/gallery/worlds')
        }},
        {label: 'Skins', onRelease: (): void => {
            navigate('/gallery/skins')
        }},
    ]

    const orderByMenu: IChildrenItem[] = [
        {label: 'Relevância', onRelease: (): void => {}},
        {label: 'Data atualização', onRelease: (): void => {}},
        {label: 'Visualização', onRelease: (): void => {}},
        {label: 'Classificação', onRelease: (): void => {}},
    ]

    return <Stack sx={{px: 2, py: 1.5}} spacing={1}>
        <Stack direction='row' spacing={1}>
            <FilterButtonMenu
                id='content-type-menu-button'
                title='Content Type'
                childrenList={contentTypeMenu}
            />
            <FilterButtonMenu
                id='order-by-menu=button'
                title='Order by'
                childrenList={orderByMenu}
            />
            <Divider orientation='vertical'/>
        </Stack>
        <Divider/>
        <Box
            sx={{
                overflowY: "auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(285px, 1fr))",
                columnGap: 2,
                rowGap: 4,
                justifyContent: "center",
                alignItems: "center",
                pt: 1
            }}
        >
            {Contents.map((content): ReactElement => {
                return <Card
                    key={content.id}
                    id={content.id}
                    title={content.title}
                    published_at={content.published_at}
                    author={content.author}
                    thumbnail={content.image}
                    tags={content.tags}
                />
            })}
        </Box>
    </Stack>

}