export default function MyProfileLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>h1h1h1hh1</div>
      <nav></nav>

      {children}
    </section>
  );
}
