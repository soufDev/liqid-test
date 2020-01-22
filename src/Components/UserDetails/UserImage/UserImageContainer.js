import { useParams } from "react-router-dom"
import useSWR from "swr";
import { fetcher } from "../../../api";

export const UserImageContainer = ({ children }) => {
    const params = useParams();
    const url = `/photos/${params.id}`;
    const { data, error } = useSWR(url, (path) => fetcher.get(path), { suspense: true });
    return children({ image: data, imageError: error });
}