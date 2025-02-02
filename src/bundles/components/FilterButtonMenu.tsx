import {MouseEvent, ReactElement, useState} from 'react'
import {Button, Menu, MenuItem, ListItemText} from '@mui/material'

export interface IChildrenItem {
    label: string
    onRelease: () => void
}


interface FilterButtonProps {
    title: string
    id: string
    childrenList: IChildrenItem[]
}


export default function FilterButtonMenu(props: FilterButtonProps): ReactElement {
    const {title, id, childrenList} = props
    const button_id = `filter-button-menu-${id}`

    const [anchor, setAnchor] = useState<null | HTMLElement>(null)
    const control: boolean = Boolean(anchor)

    function handleOnRelease(event: MouseEvent<HTMLElement>): void {setAnchor(event.currentTarget)}
    function handleOnClose(): void {setAnchor(null)}

    return <>
        <Button
            variant='text'
            size='small'
            sx={{borderRadius: 5, fontSize: 11}}
            id={button_id}
            aria-controls={control ? button_id : undefined}
            aria-haspopup='true'
            aria-expanded={control ? 'true' : undefined}
            onMouseUp={handleOnRelease}
        >
            {title} ▼
        </Button>
        <Menu
            onClose={handleOnClose}
            anchorEl={anchor}
            open={control}
            MenuListProps={{'aria-labelledby': button_id}}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            transformOrigin={{vertical: 'top', horizontal: 'center'}}
        >
            {childrenList.map((childrenItem: IChildrenItem): ReactElement => {
                return <MenuItem onMouseUp={() => {
                    handleOnClose()
                    childrenItem.onRelease()
                }}>
                    <ListItemText>{childrenItem.label}</ListItemText>
                </MenuItem>
            })}
        </Menu>
    </>
}
