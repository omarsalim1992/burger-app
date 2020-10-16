import history from './history';

// export default (url, props = {}) => {
//     const [path, queryParams] = url.split('?');
//     history.push({
//         pathname: path,
//         search: queryParams,
//         state: { ...props }
//     });
// };
export default (url) => {
    history.push({
        pathname: url
    });
};
