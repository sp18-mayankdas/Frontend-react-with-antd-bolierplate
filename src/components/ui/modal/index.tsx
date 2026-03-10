import { cn } from '@/utils';
import { CloseOutlined } from '@ant-design/icons';
import { Modal as AntModal, type ModalProps as AntModalProps } from 'antd';
import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';
import { Button } from '../button';

// ─── Header ───────────────────────────────────────────────────────────────────

interface ModalHeaderProps {
  title: ReactNode;
  /** Slot for content aligned to the center of the header bar */
  centerContent?: ReactNode;
  /** Slot for actions/content on the right side of the header bar */
  headerExtra?: ReactNode;
  closable?: boolean;
  onClose: () => void;
  onHeightChange?: (height: number) => void;
  className?: string;
}

const ModalHeader = ({
  title,
  centerContent,
  headerExtra,
  closable = true,
  onClose,
  onHeightChange,
  className,
}: ModalHeaderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Report header height to parent when it changes (useful for scroll-height calculations)
  useEffect(() => {
    const el = ref.current;
    let observer: ResizeObserver | undefined;

    if (el && onHeightChange) {
      observer = new ResizeObserver(() => {
        onHeightChange(el.offsetHeight ?? 0);
      });
      observer.observe(el);
    }

    return () => {
      observer?.disconnect();
    };
  }, [onHeightChange]);

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-between gap-2 px-5 py-4 border-b border-gray-100',
        className
      )}
    >
      {/* Left: title */}
      <span className="text-base font-medium text-gray-900 truncate">{title}</span>

      {/* Center: optional slot */}
      {centerContent && <div className="flex-1 flex justify-center mx-2">{centerContent}</div>}

      {/* Right: extra actions + close button */}
      <div className="flex items-center gap-2 shrink-0">
        {headerExtra}
        {closable && (
          <Button
            type="text"
            size="small"
            icon={<CloseOutlined />}
            onClick={onClose}
            className="flex items-center justify-center rounded-full hover:bg-gray-100"
          />
        )}
      </div>
    </div>
  );
};

// ─── Modal ────────────────────────────────────────────────────────────────────

export interface ModalProps extends Omit<AntModalProps, 'title' | 'onCancel' | 'open'> {
  /** Controlled open state */
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Modal title — when omitted the entire header is hidden */
  title?: ReactNode;
  /** Slot for content in the center of the header bar */
  centerContent?: ReactNode;
  /** Slot for actions on the right side of the header bar (before close button) */
  headerExtra?: ReactNode;
  /** Show close button in header */
  closable?: boolean;
  /** ClassName applied to the header bar */
  headerClassName?: string;
  /** Inline styles for the modal body */
  bodyStyle?: CSSProperties;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  centerContent,
  headerExtra,
  closable = true,
  headerClassName,
  bodyStyle,
  className,
  children,
  ...rest
}: ModalProps) => (
  <AntModal
    open={isOpen}
    onCancel={onClose}
    centered
    footer={null}
    closable={false}
    destroyOnHidden
    className={cn(className)}
    title={
      title !== undefined ? (
        <ModalHeader
          title={title}
          centerContent={centerContent}
          headerExtra={headerExtra}
          closable={closable}
          onClose={onClose}
          className={headerClassName}
        />
      ) : null
    }
    styles={{
      body: { padding: 20, overflowY: 'auto', ...bodyStyle },
      header: { margin: 0, padding: 0 },
    }}
    {...rest}
  >
    {children}
  </AntModal>
);
