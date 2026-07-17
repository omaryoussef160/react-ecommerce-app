import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e4e0d9] bg-[#27332a] px-5 py-12 text-[#edf1e9] sm:px-8">
      <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[22px] border-[#3d513f]" />
      <div className="absolute -bottom-12 left-[18%] h-28 w-28 rotate-45 border border-[#536e55]/60" />

      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-['Playfair_Display'] text-3xl font-semibold tracking-tight">
            nest<span className="text-[#b9cfb4]">.</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#bdc9bb]">
            Thoughtful pieces for the small rituals that make a home feel yours.
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a9c0a4]">Explore</p>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-[#dfe8dc]">
            <Link to="/" className="transition hover:text-[#b9cfb4]">Collection</Link>
            <Link to="/cart" className="transition hover:text-[#b9cfb4]">Your cart</Link>
            <Link to="/contact" className="transition hover:text-[#b9cfb4]">Contact us</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a9c0a4]">A little note</p>
            <p className="mt-4 text-sm leading-6 text-[#dfe8dc]">Good objects, good days.</p>
          </div>
          <div className="flex gap-2">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#536e55] text-[#dfe8dc] transition hover:border-[#b9cfb4] hover:bg-[#3d513f]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="#" aria-label="Pinterest" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#536e55] text-[#dfe8dc] transition hover:border-[#b9cfb4] hover:bg-[#3d513f]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.65 19.31c-.09-1.64-.02-3.61.4-5.39l1.32-5.59s-.33-.66-.33-1.64c0-1.54.89-2.69 2-2.69.94 0 1.4.71 1.4 1.56 0 .95-.61 2.37-.92 3.69-.26 1.1.55 2 1.64 2 1.97 0 3.3-2.53 3.3-5.53 0-2.28-1.54-3.99-4.35-3.99-3.16 0-5.13 2.36-5.13 5 0 .91.27 1.55.69 2.05.19.22.22.31.15.57l-.23.94c-.08.3-.31.41-.57.3-1.59-.65-2.33-2.39-2.33-4.34 0-3.23 2.72-7.1 8.11-7.1 4.33 0 7.18 3.13 7.18 6.49 0 4.45-2.47 7.78-6.11 7.78-1.22 0-2.37-.66-2.76-1.4l-.75 2.98c-.45 1.79-1.33 3.58-2.14 4.97A10 10 0 1 0 12 2Z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-wrap justify-between gap-3 border-t border-[#3d513f] pt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9db29a]">
        <span>© 2026 Nest. Made with intention.</span>
        <span>Cairo · Everywhere</span>
      </div>
    </footer>
  );
}

export default Footer;
