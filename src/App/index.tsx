import React, { useMemo, useState, Suspense } from 'react';
import menuContext from './menuContext';
import split from 'lodash/split';
import reduce from 'lodash/reduce';
import lowerFirst from 'lodash/lowerFirst';
import classnames from 'classnames';
import styles from './index.less';

const Menu = React.lazy(() => import(/* webpackPrefetch: true */'lib/Menu'));

function RenderingComponent({ Component }: { Component: React.FunctionComponent }) {
    return <Component />
}

export default function () {
    const [activeKey, setActiveKey] = useState<string>('home');

    const menuItems = useMemo(() => reduce<string, { [key: string]: string }>(menuContext.keys(), (result, filePath) => {
        const filePathStrings = split(filePath, '/');
        const fileName = filePathStrings[filePathStrings.length - 1];
        const fileNameStrings = split(fileName, '.');
        let name = lowerFirst(fileNameStrings[0]);
        if (name === 'index' && filePathStrings.length > 1) {
            name = lowerFirst(filePathStrings[filePathStrings.length - 2]);
        }

        result[name] = filePath;
        return result;
    }, {}), [menuContext]);

    const menuComponents = useMemo(() =>
        reduce<[string, string], { [key: string]: React.LazyExoticComponent<React.FunctionComponent> }>(Object.entries(menuItems), (result, [name, filePath]) => {
            result[name] = React.lazy(() => menuContext(filePath));

            return result;
        }, {}), [menuItems]);

    return (
        <div className={classnames('main', styles.main)}>
            <Suspense fallback={'Loading'}>
                <Menu items={menuItems} activeKey={activeKey} setActiveKey={setActiveKey} className={styles.menu} />
            </Suspense>
            <div className={styles.content}>
                <Suspense fallback={'Loading'}>
                    <RenderingComponent Component={menuComponents[activeKey]} />
                </Suspense>
            </div>
        </div>
    );
}