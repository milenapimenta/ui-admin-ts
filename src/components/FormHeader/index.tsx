import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

const FormHeader = ({ title }: any) => {
  const { Title } = Typography;
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <button className={styles.button} onClick={() => navigate(-1)}>
        <ArrowLeftOutlined className={styles.icon} />
      </button>
      <Title className={styles.title} level={3}>{title}</Title>
    </div>
  );
};

export default FormHeader;
