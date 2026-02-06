interface IPageHeaderProps {
  heading: string;
  actions?: React.ReactNode;
}

export const PageHeader = ({ heading, actions }: IPageHeaderProps) => {
  return (
    <div className="flex justify-between items-center py-1 mb-4">
      <p className="font-poppins font-medium text-xl text-gray-600">{heading}</p>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
};
