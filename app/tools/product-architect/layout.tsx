// This layout removes the global Navbar and Footer from the workspace
// The workspace has its own full-screen nav built in
export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
