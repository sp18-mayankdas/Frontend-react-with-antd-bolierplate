import { CheckCircleOutlined } from '@ant-design/icons';
import { AuthLayout } from '@/components';

const VerifyEmailPage = () => {
  return (
    <AuthLayout>
      <div className="space-y-8 text-center">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <CheckCircleOutlined style={{ fontSize: 48, color: '#34c759' }} />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-medium font-poppins">Email Verified!</h1>
          <p className="text-base text-[#45464E] font-medium">
            Your email has been successfully verified. Please check your inbox to begin your
            onboarding process.
          </p>
          <p className="text-sm text-[#8B8D97]">
            An email with instructions to set up your account has been sent to your inbox.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default VerifyEmailPage;
