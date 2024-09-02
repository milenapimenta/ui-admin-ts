import { useEffect, useState } from "react";
import { Tabs, Typography } from "antd";
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
      <Title level={3}>Dashboard</Title>
      <Title className={styles.title} level={4}>Categorias</Title>
      <Tabs type="card">
        <Tabs.TabPane tab="Whatsapp" key="1">
          <h1>Total: {whatsappCategories.length}</h1>
          <h3>
            Última categoria adicionada: {whatsappCategories[0]?.name || 'Nenhuma categoria'} {' '}
          </h3>
          <p>adicionada em: {moment(whatsappCategories[0]?.created_at).format('DD/MM/YYYY HH:mm:ss')}</p>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Discord" key="2">
          <h1>Total: {discordCategories.length}</h1>
          <h3>
            Última categoria adicionada: {discordCategories[0]?.name || 'Nenhuma categoria'} {' '}
          </h3>
          <p>adicionada em: {moment(discordCategories[0]?.created_at).format('DD/MM/YYYY HH:mm:ss')}</p>

        </Tabs.TabPane>
        <Tabs.TabPane tab="Telegram" key="3">
          <h1>Total: {telegramCategories.length}</h1>
          <h3>
            Última categoria adicionada: {telegramCategories[0]?.name || 'Nenhuma categoria'} {' '}
          </h3>
          <p>adicionada em: {moment(telegramCategories[0]?.created_at).format('DD/MM/YYYY HH:mm:ss')}</p>

        </Tabs.TabPane>
      </Tabs>
      <Title className={styles.title} level={4}>Grupos</Title>
      <Tabs type="card">
        <Tabs.TabPane tab="Whatsapp" key="1">
          Último grupo adicionado: {/* Implementar lógica para grupos */}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Discord" key="2">
          Último grupo adicionado: {/* Implementar lógica para grupos */}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Telegram" key="3">
          Último grupo adicionado: {/* Implementar lógica para grupos */}
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};

export default DashboardPage;
