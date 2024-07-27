const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-custom-image">
      {children}
    </div>
  );
};

export default AuthLayout;
