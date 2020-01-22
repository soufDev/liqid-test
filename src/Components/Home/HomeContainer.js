import useSWR from "swr";
import { fetcher } from "../../api";
import { useLocation } from "react-router-dom";
import { useMedia } from "../../customHooks";

export const HomeContainer = ({ children }) => {
    const { pathname } = useLocation();
    const isDesktop = useMedia('(min-width: 414px)');
    const isVisible = pathname === '/' || isDesktop;
    const { data, error } = useSWR('/users', (path) => fetcher.get(path), { suspense: true });
    return children({ users: data, error, isVisible });
}