import { ReactNode, FC } from 'react'
import styles from '../app/layout.module.scss';

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.layout}>{children}</div>
    )
}

export default Layout