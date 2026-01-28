import { AuthLayout, Button, Input, Item } from '@/components';
import { Form } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ForgotPasswordPage = () => {
  const [form] = Form.useForm();
  return (
    <AuthLayout>
      <Form form={form} layout="vertical" className="space-y-5" validateTrigger={['onSubmit']}>
        <h1>Don&apos;t worry! Happens to best of us.</h1>
        <Item
          name="email"
          size="large"
          rules={[
            { required: true, message: 'Email is required.' },
            {
              type: 'email',
              message: 'Enter a valid email',
            },
          ]}
        >
          <Input
            className="flex gap-3 items-center"
            size="large"
            variant="filled"
            placeholder="Your Email"
            autoComplete="email"
            prefix={<MailOutlined />}
          />
        </Item>

        <Button htmlType="submit" block>
          Request Password Reset
        </Button>
      </Form>
    </AuthLayout>
  );
};
export default ForgotPasswordPage;
