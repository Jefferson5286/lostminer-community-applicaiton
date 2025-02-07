import {useNavigate, NavigateFunction} from 'react-router'


// eslint-disable-next-line
export function useNavigateState(to: string, state: any): () => void {
    const navigate: NavigateFunction = useNavigate()

    return (): void => {
        navigate(to, {state: {
            data: state
        }})
    }
}