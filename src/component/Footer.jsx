import { ArrowUp } from "lucide-react";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
      
      <div className="text-center md:text-left">
      <p className="text-sm text-muted-foreground">
  {`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`} Made With <Heart size={16} strokeWidth={3} className="inline ml-1" /> by Vansh
</p>
        <p className="text-xs text-muted-foreground mt-1">
          Full Stack Developer • Building clean, scalable & user-focused web experiences
        </p>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};