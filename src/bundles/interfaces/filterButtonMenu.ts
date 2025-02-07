export interface IChildrenItem {
    label: string
    onRelease: () => void
}
export interface FilterButtonProps {
    title: string
    id: string
    childrenList: IChildrenItem[]
}