import { message, Tooltip } from 'antd';
import { type TooltipPlacement } from 'antd/es/tooltip';
import { type RcFile } from 'antd/es/upload';
import { Upload as AntdUpload, type UploadProps } from 'antd/lib';
import React from 'react';

import { fileType, hasFileNameAlphanumericStart, cn } from '@/utils';
import { LoadingSpinner } from '../loading-spinner';

interface IProps extends UploadProps {
  maxSize?: number;
  errorCallback?: (error: any) => void;
  finalCallback?: () => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  ref?: React.RefObject<any>;
  preUploadCallback?: (file?: RcFile) => void;
  customUpload?: (file: RcFile) => void;
  uploadingFile?: boolean;
  setUploadingFile?: React.Dispatch<React.SetStateAction<boolean>>;
  useDragger?: boolean;
  draggerText?: string;
  draggerIcon?: string;
  draggerBodyClassName?: string;
  draggerBodyStyle?: React.CSSProperties;
  showTooltip?: boolean;
  customTooltipMessage?: string;
  tooltipPlacement?: TooltipPlacement;
  folderName?: string;
  fromPublicPage?: boolean;
}

export const Upload = (props: IProps) => {
  const {
    maxSize = 2,
    errorCallback,
    finalCallback,
    className,
    style,
    children,
    uploadingFile,
    setUploadingFile,
    preUploadCallback,
    ref,
    useDragger = false,
    customUpload,
    accept,
    draggerText,
    draggerIcon,
    draggerBodyClassName,
    draggerBodyStyle,
    showTooltip = true,
    customTooltipMessage,
    tooltipPlacement = 'top',
    ...rest
  } = props;

  const uploadProps: UploadProps = {
    name: 'file',
    fileList: [],
    showUploadList: false,
    accept: props?.accept,
    beforeUpload: (file: RcFile) => {
      const acceptStr = typeof props?.accept === 'string' ? props.accept : undefined;
      const fileTypes = acceptStr?.split(',');
      const isValidType =
        acceptStr === undefined
          ? true
          : fileTypes?.includes(`.${fileType(file)}`) || acceptStr === 'image/*';
      if (!isValidType) {
        message.error(`${file.name} is not allowed`);
        return AntdUpload.LIST_IGNORE;
      }

      if (!hasFileNameAlphanumericStart(file.name)) {
        return AntdUpload.LIST_IGNORE;
      }

      if (maxSize && file.size > maxSize * 1024 * 1024) {
        message.error(`${file.name} is too large! Please select a file under ${maxSize}MB.`);
        return AntdUpload.LIST_IGNORE;
      }

      if (customUpload) {
        customUpload(file);
        return AntdUpload.LIST_IGNORE;
      }
      uploadFile(file);
      return AntdUpload.LIST_IGNORE;
    },
    customRequest: () => null,
  };

  const uploadFile = (file: RcFile) => {
    if (file.size >= maxSize * 1024 * 1024) {
      message.error({
        content: `File too large! Please select a file under ${maxSize}MB.`,
        key: 'uploadfiles',
        duration: 4,
      });
    } else {
      const formData = new FormData();
      formData.append('file', file);
      if (props?.folderName) {
        formData.append('folderName', props?.folderName);
      }

      if (setUploadingFile) setUploadingFile(true);
      if (preUploadCallback) preUploadCallback(file);
    }
  };

  return (
    <Tooltip
      title={showTooltip ? (customTooltipMessage ?? `Maximum file size: ${maxSize} MB`) : undefined}
      placement={tooltipPlacement}
    >
      {!useDragger ? (
        <AntdUpload {...uploadProps} className={cn(className)} style={style} ref={ref} {...rest}>
          {children}
        </AntdUpload>
      ) : (
        <AntdUpload.Dragger
          {...uploadProps}
          className={`${className ?? ''}`}
          style={style}
          ref={ref}
          {...rest}
        >
          {uploadingFile ? (
            <>
              <LoadingSpinner />
              <div>Uploading file...</div>
            </>
          ) : (
            (children ?? (
              <div className={`${draggerBodyClassName ?? ''}`}>
                <div>{draggerText ?? 'Drop file here or click to select'}</div>
              </div>
            ))
          )}
        </AntdUpload.Dragger>
      )}
    </Tooltip>
  );
};
