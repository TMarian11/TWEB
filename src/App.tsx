import { useState } from 'react';
import { Layout, Menu, Form, Input, Button, Card } from 'antd';
import './App.css';

const { Header, Content } = Layout;

type InputValues = {
  title: string;
  description: string;
  imageUrl: string;
};

const App = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    title: '',
    description: '',
    imageUrl: '', 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (values: InputValues) => {
    console.log(values);
    alert('Form submitted!');
  };

  const [form] = Form.useForm();

  const cards = Array.from({ length: 1 }).map((_, index) => (
    <Card key={index} style={{ margin: '16px 0' }}>
      <h2>{inputValues.title}</h2>
      <p>{inputValues.description}</p>
      <img src={inputValues.imageUrl} alt={inputValues.title} style={{ maxWidth: '100%' }} />
    </Card>
  ));

  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Pagina 1</Menu.Item>
          <Menu.Item key="2">Pagina 2</Menu.Item>
          <Menu.Item key="3">Pagina 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ margin: '0 16px' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Titlu" name="title">
              <Input name="title" value={inputValues.title} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Descriere" name="description">
              <Input name="description" value={inputValues.description} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item label="Link poza" name="imageUrl">
              <Input name="imageUrl" value={inputValues.imageUrl} onChange={handleInputChange} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Trimite
              </Button>
            </Form.Item>
          </Form>
          {cards}
        </div>
      </Content>
    </Layout>
  );
};

export default App;
