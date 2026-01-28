import { Spin as AntSpin } from 'antd';

export const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AntSpin />
    </div>
  );
};
