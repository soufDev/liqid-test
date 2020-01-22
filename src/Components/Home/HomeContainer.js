export const HomeContainer = ({ children }) => {
    const users = [];
    const isLoading = false;
    const error = null;
    return children({ users, isLoading, error });
}