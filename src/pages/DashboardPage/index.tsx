import { useEffect, useState } from "react";
import { Card, Col, Row, Tabs, Typography } from "antd";
import api from "../../api";
import ICategoriesProps from "../../interfaces/ICategoriesProps";
import moment from "moment";
import styles from './styles.module.css';

const { Title } = Typography;

const DashboardPage = () => {
  const [whatsappCategories, setWhatsappCategories] = useState<ICategoriesProps[]>([]);
  const [discordCategories, setDiscordCategories] = useState<ICategoriesProps[]>([]);
  const [telegramCategories, setTelegramCategories] = useState<ICategoriesProps[]>([]);

  const fetchCategories = async () => {
    try {
      const [whatsappRes, discordRes, telegramRes] = await Promise.all([
        api.get('/categories/whatsapp/trending'),
        api.get('/categories/Discord/trending'),
        api.get('/categories/Telegram/trending'),
      ]);
      setWhatsappCategories(whatsappRes.data.rows);
      console.log(whatsappRes)
      setDiscordCategories(discordRes.data.rows);
      setTelegramCategories(telegramRes.data.rows);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Title className={styles.title} level={3}>Dashboard</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Categorias" bordered={false}>
            <Tabs>
              <Tabs.TabPane tab="Whatsapp" key="1">
                <h1 className={styles.h0}>{whatsappCategories.length}</h1>
                <h3>
                  Última adicionada {whatsappCategories[0]?.name || 'Nenhuma categoria'} {' '}
                </h3>
                <p>Criada em {moment(whatsappCategories[0]?.created_at).format('DD/MM/YYYY HH:mm:ss')}</p>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Discord" key="2">
                <h1 className={styles.h0}>{discordCategories.length}</h1>
                <h3>
                  Última adicionada {discordCategories[0]?.name || 'Nenhuma categoria'} {' '}
                </h3>
                <p>Criada em {moment(discordCategories[0]?.created_at).format('DD/MM/YYYY HH:mm:ss')}</p>

              </Tabs.TabPane>
              <Tabs.TabPane tab="Telegram" key="3">
                <h1 className={styles.h0}>{telegramCategories.length}</h1>
                <h3>
                  Última adicionada: {telegramCategories[0]?.name || 'Nenhuma categoria'} {' '}
                </h3>
                <p>Criada em {moment(telegramCategories[0]?.created_at).format('DD/MM/YYYY HH:mm:ss')}</p>

              </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Grupos" bordered={false}>
            <Tabs>
              <Tabs.TabPane tab="Whatsapp" key="1">
                  <h1 className={styles.h0}>XX</h1>
                  <h3>
                    Último adicionado XXXXX
                  </h3>
                  <p>Criado em XX/XX/XX</p>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Discord" key="2">
                  <h1 className={styles.h0}>XX</h1>
                  <h3>
                    Último adicionado XXXXX
                  </h3>
                  <p>Criado em XX/XX/XX</p>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Telegram" key="3">
                  <h1 className={styles.h0}>XX</h1>
                  <h3>
                    Último adicionado XXXXX
                  </h3>
                  <p>Criado em XX/XX/XX</p>
                </Tabs.TabPane>
            </Tabs>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Usuários" bordered={false}>
            <h1 className={styles.h0}>XX</h1>
            <h3>
              Último adicionado XXXXX
            </h3>
            <p>Criado em XX/XX/XX</p>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DashboardPage;
