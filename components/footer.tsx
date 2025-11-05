export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">© {currentYear} Adarsh Vij • Built with React + Tailwind CSS</p>
      </div>
    </footer>
  )
}
