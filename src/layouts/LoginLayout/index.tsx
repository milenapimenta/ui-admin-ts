import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"
import styles from './styles.module.css'

const LoginLayout = () => {
  return (
    <Layout className={styles.layout}>
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default LoginLayout;
