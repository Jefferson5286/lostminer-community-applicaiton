import {ReactElement} from "react";
import {Box} from "@mui/material";


interface ThumbnailProps {
    src?: string
    alt: string
}

export default function Thumbnail({src, alt}: ThumbnailProps): ReactElement {
    return <Box sx={{ borderRadius: 2.5, width: '100%', height: '88%', overflow: 'hidden' }}>
        <img
            src={src}
            alt={alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
    </Box>
}