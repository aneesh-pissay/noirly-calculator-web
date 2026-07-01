import { Link, Outlet } from 'react-router-dom';
import PublicHeader from './PublicHeader';
import SiteFooter from './SiteFooter';

export default function LegalPageLayout() {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      <main className="pt-16 sm:pt-[4.5rem]">
        <Outlet />
      </main>
      <SiteFooter>
        <div className="flex gap-4 text-sm">
          <Link
            to="/calc"
            className="text-on-surface-variant transition hover:text-primary"
          >
            Calculator
          </Link>
          <Link
            to="/privacy-policy"
            className="text-on-surface-variant transition hover:text-primary"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="text-on-surface-variant transition hover:text-primary"
          >
            Terms
          </Link>
        </div>
      </SiteFooter>
    </div>
  );
}
