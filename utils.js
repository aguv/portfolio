const utils = {};

utils.handleAlert = (title, message, color, fn) => {
    fn({show: true, title, message, color});
    setTimeout(() => fn({show: false, title: '', message: '', color: ''}), 2000);
}

utils.transition = 'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110';

export default utils;