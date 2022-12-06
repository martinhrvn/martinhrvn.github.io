export const Emphasize = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <span className={`font-bold  ${className ?? ""}`}>{children}</span>;
};
