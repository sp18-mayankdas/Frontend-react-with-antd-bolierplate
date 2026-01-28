import { AuthLayout, Button, Input, Item } from '@/components';
import { Form } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [form] = Form.useForm();
  return (
    <AuthLayout>
      <Form layout="vertical" form={form} validateTrigger={['onSubmit']} className="space-y-8">
        <h1 className="text-center text-4xl font-semibold">Reset Password</h1>

        <Item
          name="email"
          size="middle"
          rules={[
            {
              required: true,
              message: 'Email is required.',
            },
            {
              type: 'email',
              message: 'Enter valid email.',
            },
          ]}
        >
          <Input
            className="flex gap-3 items-center"
            size="large"
            variant="filled"
            placeholder="Your Email address"
            prefix={<MailOutlined />}
            autoComplete="email"
            disabled
          />
        </Item>

        <Item
          name="password"
          size="middle"
          rules={[
            {
              required: true,
              message: 'Please enter your password.',
            },
          ]}
        >
          <Input.Password
            className="flex gap-3 items-center"
            size="large"
            variant="filled"
            placeholder="Create a Strong Password"
            prefix={<LockOutlined />}
            autoComplete="current-password"
          />
        </Item>

        <Button htmlType="submit" block>
          Reset Password
        </Button>

        <div className="flex items-center justify-center gap-1 font-medium">
          Not Registered Yet?
          <Link to="/sign-up">Create an Account</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default ResetPasswordPage;
