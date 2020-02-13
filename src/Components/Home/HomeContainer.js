import useSWR from "swr";
import { fetcher } from "../../api";
import { useLocation, useHistory } from "react-router-dom";
import { useMedia } from "../../customHooks";

export const HomeContainer = ({ children }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const goToDetails = id => history.push(`/${id}`);
  const isDesktop = useMedia("(min-width: 1200px)");
  const isVisible = pathname === "/" || isDesktop;
  const { data, error } = useSWR("/users", path => fetcher.get(path), {
    suspense: true
  });
  return children({ users: data, error, isVisible, goToDetails });
};
