import {ReactElement, MouseEvent, useState} from 'react'

import {MoreVert} from '@mui/icons-material'
import {IconButton, Menu, MenuItem} from '@mui/material'

interface MenuButtonProps {
    project_id: string | number
}

export default function CardMenuButton({project_id}: MenuButtonProps): ReactElement {
    const button_id = `card-button-menu-from-${project_id}`

    const [anchor, setAnchor] = useState<null | HTMLElement>(null)
    const control: boolean = Boolean(anchor)

    function handleOnRelease(event: MouseEvent<HTMLElement>): void {setAnchor(event.currentTarget)}
    function handleOnClose(): void {setAnchor(null)}

    return <>
        <IconButton
            id={button_id}
            aria-controls={control ? button_id : undefined}
            aria-haspopup='true'
            aria-expanded={control ? 'true' : undefined}
            onMouseUp={handleOnRelease}
        >
            <MoreVert/>
        </IconButton>
        <Menu
            onClose={handleOnClose}
            anchorEl={anchor}
            open={control}
            MenuListProps={{'aria-labelledby': button_id}}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
        >
            <MenuItem onClick={handleOnClose}>Profile</MenuItem>
            <MenuItem onClick={handleOnClose}>My account</MenuItem>
            <MenuItem onClick={handleOnClose}>Logout</MenuItem>
        </Menu>
    </>
}