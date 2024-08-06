interface HeaderProps {
  label: string;
}
export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col items-center w-[400px]">
      <h1 className="text-3xl font-bold">Auth 🔐</h1>
      <p>{label}</p>
    </div>
  );
};
