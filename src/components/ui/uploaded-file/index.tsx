import { Popconfirm, type PopconfirmProps, Tooltip } from 'antd';
import { useRef } from 'react';

import DeleteFileIcon from '@/assets/Cross.svg?react';
import UploadIcon from '@/assets/Upload.svg?react';
import { Button } from '../button';
import { LoadingSpinner } from '../loading-spinner';
import { cn, formatFileSize, getFileNameFromUrl, handleDownload } from '@/utils';

interface BaseProps {
  url: string;
  canDownload?: boolean;
  size?: 'small' | 'large';
  className?: string;
  icon?: boolean;
  noBorder?: boolean;
  name?: string;
  loading?: boolean;
  fileSize?: number;
}

interface PropsWithPopConfirm extends BaseProps {
  onRemove: () => void;
  popover?: true;
  popConfirmProps?: PopconfirmProps;
}

interface PropsWithoutPopConfirm extends BaseProps {
  onRemove?: () => void;
  popover?: never | false;
  popConfirmProps?: never | undefined;
}

type UploadedFileProps = PropsWithPopConfirm | PropsWithoutPopConfirm;

export const UploadedFile = (props: UploadedFileProps) => {
  const {
    url,
    canDownload,
    onRemove,
    size = 'small',
    className,
    icon = true,
    noBorder = false,
    name,
    popover = false,
    popConfirmProps,
    loading = false,
    fileSize,
  } = props;

  const ref = useRef<HTMLDivElement>(null);

  const fileName = name ?? getFileNameFromUrl(url ?? '');
  const formattedSize = formatFileSize(fileSize);

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-3',
        noBorder ? '' : ' rounded-lg p-2',
        size === 'small' ? 'max-w-[120px]' : 'max-w-full',
        className
      )}
    >
      {icon && (
        <div className="flex items-center justify-center bg-(--color-primary-70) rounded-full h-10 w-10 shrink-0">
          <UploadIcon />
        </div>
      )}

      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <Tooltip title={fileName} placement="bottom">
          <p
            onClick={canDownload ? () => handleDownload(url, fileName, canDownload) : undefined}
            className={cn(
              'text-sm font-medium truncate',
              canDownload ? 'cursor-pointer hover:text-blue-600' : 'cursor-text'
            )}
          >
            {fileName}
          </p>
        </Tooltip>
        {formattedSize && <span className="text-xs text-gray-500">{formattedSize}</span>}
      </div>

      {onRemove &&
        !loading &&
        (popover ? (
          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={onRemove}
            placement="leftTop"
            {...popConfirmProps}
          >
            <Button
              type="default"
              icon={<DeleteFileIcon />}
              className="border-none rounded-xl bg-[#F5EDFF]"
            />
          </Popconfirm>
        ) : (
          <Button
            type="default"
            icon={<DeleteFileIcon />}
            onClick={handleRemove}
            className="border-none rounded-xl bg-[#F5EDFF]"
          />
        ))}

      {loading && <LoadingSpinner />}
    </div>
  );
};
