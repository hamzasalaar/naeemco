export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-10">
      <div className="container-width text-center text-sm">
        <p>© {new Date().getFullYear()} Naeem&Co Global. All rights reserved.</p>
        <p className="mt-2 opacity-80">
          Global Supplier of Medical Equipment & Textile Products
        </p>
      </div>
    </footer>
  );
}
