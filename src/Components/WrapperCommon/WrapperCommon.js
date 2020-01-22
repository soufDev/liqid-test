export const WrapperCommon = ({ isVisible, children }) => {
    if (isVisible) {
        return children;
    }
    return null;
}