import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex h-[85dvh] items-center justify-center">
      <SignUp />
    </div>
  );
}
