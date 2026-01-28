import { Form } from 'antd';
import { MailOutlined, UserOutlined } from '@ant-design/icons';
import { AuthLayout, Button, Input, Item } from '@/components';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [form] = Form.useForm();
  return (
    <AuthLayout imagePosition="left">
      <Form form={form} layout="vertical" className="space-y-10" validateTrigger={['onSubmit']}>
        <h1 className="text-center text-4xl font-semibold">Sign Up</h1>
        <div>
          {/* First Name */}
          <Item
            name="firstName"
            size="middle"
            rules={[
              {
                required: true,
                message: 'Please Enter First name.',
              },
            ]}
          >
            <Input
              className="flex gap-3 items-center"
              size="large"
              variant="filled"
              placeholder="First Name"
              prefix={<UserOutlined />}
            />
          </Item>

          {/* Last Name */}
          <Item
            name="lastName"
            size="middle"
            rules={[
              {
                required: true,
                message: 'Please Enter First name.',
              },
            ]}
          >
            <Input
              className="flex gap-3 items-center"
              size="large"
              variant="filled"
              placeholder="Last Name"
              prefix={<UserOutlined />}
            />
          </Item>

          {/* Email */}
          <Item
            name="email"
            size="middle"
            rules={[
              { required: true, message: 'Email is required.' },
              { type: 'email', message: 'Enter a valid email' },
            ]}
          >
            <Input
              className="flex gap-3 items-center"
              size="large"
              variant="filled"
              placeholder="Enter your Email"
              prefix={<MailOutlined />}
              autoComplete="email"
            />
          </Item>
        </div>

        <div className="flex flex-col space-y-2">
          <Button htmlType="submit" block>
            Sign Up
          </Button>

          {/* Sign Up */}
          <div className="flex items-center justify-center gap-1 font-medium">
            Already have an account?
            <Link to="/login">Login</Link>
          </div>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default SignUpPage;
