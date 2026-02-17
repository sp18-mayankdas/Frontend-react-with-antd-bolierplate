import { Button } from '@/components';
import { cn } from '@/utils/cn';
import { CloseOutlined } from '@ant-design/icons';
import { Modal as AntdModal, type ModalProps } from 'antd';
import { createRef, useEffect, useState } from 'react';

interface HeaderProps {
  title?: string | React.ReactNode;
  headerRightContent?: string | React.ReactNode;
  onCancel: () => void;
  centerContent?: string | React.ReactNode;
  headerClassName?: string;
}

interface HeaderComponentProps extends HeaderProps {
  setHeaderHeight: (val: number) => void;
  isModalClosable?: boolean;
}

interface IProps extends Omit<ModalProps, 'title' | 'onCancel'>, HeaderProps {
  isOpen: boolean;
  children: string | React.ReactNode;
  bodyStyle?: React.CSSProperties;
  centerContent?: string | React.ReactNode;
  headerClassName?: string;
  closable?: boolean;
}

export const Modal = ({
  title,
  isOpen,
  onCancel,
  children,
  headerRightContent,
  centerContent,
  bodyStyle,
  headerClassName,
  className,
  closable = true,
  ...rest
}: IProps) => {
  const [, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setHeaderHeight(0);
    }
  }, [isOpen]);

  return (
    <AntdModal
      title={
        title && (
          <Header
            title={title}
            headerRightContent={headerRightContent}
            onCancel={onCancel}
            setHeaderHeight={setHeaderHeight}
            centerContent={centerContent}
            headerClassName={headerClassName}
            isModalClosable={closable}
          />
        )
      }
      open={isOpen}
      centered
      footer={null}
      closable={false}
      className={cn('modal-wrapper', className)}
      styles={{
        body: { ...bodyStyle, padding: 20, overflowY: 'auto' },
        // content: {
        //   padding: 20,
        //   maxHeight: `calc(100vh - ${headerHeight}px)`,
        //   overflowY: 'hidden',
        // },
      }}
      {...rest}
    >
      {children}
    </AntdModal>
  );
};

const Header = (props: HeaderComponentProps) => {
  const {
    title,
    headerRightContent,
    onCancel,
    setHeaderHeight,
    centerContent,
    headerClassName,
    isModalClosable,
  } = props;

  const headerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight ?? 0);
  });

  return (
    <div
      className={cn(
        'px-4 flex items-center justify-between py-4 border-b border-gray-200',
        headerClassName
      )}
      ref={headerRef}
    >
      <h1 className="text-base font-normal text-(--color-black-10)">{title}</h1>
      {centerContent && <div className="flex-1 mx-4">{centerContent}</div>}
      <div className="flex items-center gap-2">
        {headerRightContent && headerRightContent}
        {isModalClosable && (
          <Button
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={onCancel}
            type="text"
            size="small"
            icon={<CloseOutlined className="w-4 h-4" />}
          />
        )}
      </div>
    </div>
  );
};
