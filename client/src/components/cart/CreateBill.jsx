import { Modal, Form, Input, Select, Card, Button } from "antd";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Müşteri Adı"
          name={"customerName"}
          rules={[
            {
              required: true,
              message: 'Müşteri Adı Boş Olamaz',
            },
          ]}
        >
          <Input placeholder="Bir Müşteri Adı Yazınız" />
        </Form.Item>
        <Form.Item
          label="Tel No"
          name={"phoneNumber"}
          rules={[
            {
              required: true,
              message: "Telefon Numarası Boş Geçilemez"
            },
          ]}
        >
          <Input placeholder="Bir Telefon Numarası Yazınız" maxLength={11}/>
        </Form.Item>
        <Form.Item
          label="Ödeme Yöntemi"
          name={"paymentMode"}
          rules={[
            {
              required: true,
              message: "Bir Ödeme Yöntemi Seçilmelidir"
            },
          ]}
        >
          <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>
        <Card>
          <div className=" flex justify-between">
            <span>Ara Toplam</span>
            <span>250₺</span>
          </div>
          <div className=" flex justify-between my-2">
            <span>KDV Toplam %8</span>
            <span className="text-red-600">+20.00₺</span>
          </div>
          <div className=" flex justify-between">
            <b>Toplam</b>
            <b>270.00₺</b>
          </div>
          <div className="flex justify-end">
            <Button 
                type="primary" 
                className="mt-4" 
                size="middle" 
                onClick={()=>setIsModalOpen(true)}
                htmlType="submit">
                    Sipariş Oluştur
            </Button>
          </div>
        </Card>
      </Form>
    </Modal>
  );
};

export default CreateBill;
