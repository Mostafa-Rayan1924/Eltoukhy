export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth">
      <body className={` overflow-x-hidden antialiased`}>{children}</body>
    </html>
  );
}
