import { Form } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { AuthLayout, Button, Checkbox, Input, Item } from '@/components';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [form] = Form.useForm();
  return (
    <AuthLayout>
      <Form form={form} layout="vertical" className="space-y-10" validateTrigger={['onSubmit']}>
        <h1 className="text-center text-4xl font-semibold">Welcome Back!</h1>
        <div>
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

          {/* Password */}
          <Item
            name="password"
            size="middle"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password
              className="flex gap-3 items-center"
              size="large"
              variant="filled"
              placeholder="Enter your Password"
              prefix={<LockOutlined />}
              autoComplete="current-password"
            />
          </Item>
        </div>

        <div className="flex flex-col space-y-2">
          {/* Remember me/Forgot Password */}
          <div className="flex items-center justify-between">
            <Item size="small" name="rememberMe">
              <Checkbox>Remember Me</Checkbox>
            </Item>

            <Item size="small">
              <Link to="/forgot-password">
                <Button type="link" className="p-0">
                  Forgot Password?
                </Button>
              </Link>
            </Item>
          </div>

          <Button htmlType="submit" block>
            Sign In
          </Button>

          {/* Sign Up */}
          <div className="flex items-center justify-center gap-1 font-medium">
            Not Registered Yet?
            <Link to="/sign-up">Create an Acccount</Link>
          </div>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default LoginPage;
