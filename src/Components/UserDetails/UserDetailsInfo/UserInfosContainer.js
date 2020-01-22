import { useParams } from "react-router-dom"
import useSWR from "swr";
import { fetcher } from "../../../api";

export const UserInfosContainer = ({ children }) => {
    const params = useParams();
    const url = `/users/${params.id}`;
    const { data, error } = useSWR(url, (path) => fetcher.get(path), { suspense: true });
    return children({ user: data, userError: error });
}