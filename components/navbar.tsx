import { UserButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="sticky top-0 z-50 bg-slate-400">
      <div className="container flex h-[60px] items-center justify-between gap-1">
        <div className="flex flex-col">
          <Link
            href={'/'}
            className="font-mono font-semibold text-black transition-colors hover:text-slate-700 sm:text-xl"
          >
            INVOICE_BUILDER
          </Link>
          <span className=" text-[11px] sm:text-xs">
            by{' '}
            <Link
              className="underline"
              target="_blank"
              href={'https://github.com/mrkarimoff'}
            >
              mrkarimoff
            </Link>
          </span>
        </div>
        {user && (
          <div className="flex items-center gap-4">
            <p className="hidden text-sm font-semibold sm:block">
              Welcome {user.firstName} {user.lastName}!
            </p>
            <UserButton afterSignOutUrl="/" />
          </div>
        )}
      </div>
      <div className="h-[1px] bg-white" />
    </div>
  );
};

export default Navbar;
