export const extractPhoneNumer = (user) => {
    const array = user.phone.split(' ');
    return array.length > 0 ? array[0]: user.phone;
}