import join from 'lodash/join';

export default function (num: number) {
    return join(['Hello', String(num), 'webpack'], ' ');
}