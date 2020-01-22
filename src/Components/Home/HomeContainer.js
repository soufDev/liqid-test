import useSWR from "swr";
import { fetcher } from "../../api";

export const HomeContainer = ({ children }) => {
    const { data, error } = useSWR('/users', (path) => fetcher.get(path), { suspense: true });
    return children({ users: data, error });
}