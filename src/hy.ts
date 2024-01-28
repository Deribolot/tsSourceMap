import join from 'lodash/join';

export default function (num: number) {
    console.log(num);
    return join(['Hello', num, 'webpack'], ' ');
}