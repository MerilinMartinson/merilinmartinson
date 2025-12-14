const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg">Merilin Martinson</span>
            <span className="w-2 h-2 rounded-full bg-primary" />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#research" className="hover:text-primary transition-colors">Research</a>
            <a href="#teaching" className="hover:text-primary transition-colors">Teaching</a>
            <a href="#cv" className="hover:text-primary transition-colors">CV</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <p className="text-sm text-background/60">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;