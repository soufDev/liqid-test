import { useLocation, useHistory } from "react-router-dom"
import { useMedia } from "../../../customHooks";

export const GoBackContainer = ({ children }) => {
    const { pathname } = useLocation();
    const history = useHistory();
    const isDesktop = useMedia('(min-width: 414px)');
    const isVisible = (pathname !== '/' && pathname !== '/add') && !isDesktop;
    const onClick = () => history.push('/');
    return children({ isVisible, onClick });
}