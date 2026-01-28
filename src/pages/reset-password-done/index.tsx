import { AuthLayout, Button } from '@/components';
import { Link } from 'react-router-dom';

const ResetPasswordDonePage = () => {
  return (
    <AuthLayout>
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
            ✅
          </div>
          <h1 className="text-3xl font-medium text-[#45464E] font-poppins">All Done!</h1>
          <p className="text-base text-[#45464E] font-medium">Password reset successful</p>
        </div>

        <Link to="/login">
          <Button block>Continue to Login</Button>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordDonePage;
