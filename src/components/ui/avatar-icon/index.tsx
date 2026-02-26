import { UserOutlined } from '@ant-design/icons';
import { type ReactNode } from 'react';

interface IProps {
  firstName: string;
  lastName?: string;
  color: string;
  profilePic?: string;
  profileComponent?: ReactNode;
  wrapperClassName?: string;
  wrapperStyle?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  allowFullFirst?: boolean;
  icon?: ReactNode;
  size?: number;
}

export const AvatarIcon = (props: IProps) => {
  const {
    firstName,
    lastName,
    color,
    profilePic,
    profileComponent,
    wrapperClassName,
    wrapperStyle,
    contentClassName,
    allowFullFirst,
    icon,
    size = 36,
  } = props;

  const getInitials = () => {
    let initial = allowFullFirst ? firstName : firstName?.[0]?.toUpperCase();
    const firstNameArr = firstName?.split(' ');
    if (lastName?.[0]) {
      initial += lastName[0].toUpperCase();
    } else if (firstNameArr?.length > 1 && !allowFullFirst) {
      initial += firstNameArr[firstNameArr?.length - 1][0].toUpperCase();
    }
    return initial;
  };

  // Calculate font size based on avatar size (roughly 40% of size)
  const fontSize = Math.max(12, Math.floor(size * 0.4));

  return (
    <div className={`${wrapperClassName ?? ''}`} {...(wrapperStyle && { style: wrapperStyle })}>
      {profileComponent ??
        (profilePic ? (
          <img
            alt={getInitials()}
            src={profilePic}
            className={`rounded-full object-cover ${contentClassName ?? ''}`}
            style={{ width: `${size}px`, height: `${size}px` }}
          />
        ) : (
          <div
            className={`rounded-full flex items-center justify-center border-3 border-gray-50 font-semibold ${contentClassName ?? ''}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color || '#f0f0f0',
              fontSize: `${fontSize}px`,
            }}
          >
            {icon ? (
              icon
            ) : getInitials() ? (
              getInitials()
            ) : (
              <UserOutlined className="text-gray-500" style={{ fontSize: `${fontSize}px` }} />
            )}
          </div>
        ))}
    </div>
  );
};
