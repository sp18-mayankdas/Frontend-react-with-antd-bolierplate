import { AuthLayout, Button } from '@/components';
import { Link } from 'react-router-dom';

const ForgotPasswordSentPage = () => {
  return (
    <AuthLayout>
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
            <span className="i-heroicons-envelope-20-solid">✉️</span>
          </div>
          <h1 className="text-3xl font-medium text-[#45464E] font-poppins">Reset Request Sent!</h1>
          <p className="text-base text-[#45464E] font-medium">
            Password reset request sent successfully. Please check your email to reset your
            password.
          </p>
        </div>

        <Link to="/login">
          <Button block>Okay</Button>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordSentPage;
