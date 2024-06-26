import { UserAuthForm } from "@/components/feature-specific/auth/UserAuthForm";
// import { buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";

export const LoginPage = () => {
  return (
    <>
      <div className="h-screen relative flex w-full flex-row items-center justify-center lg:px-0">
        {/* <Link
          to="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-0 top-2 md:right-0 md:top-2"
          )}
        >
          Login
        </Link> */}
        <div className="relative hidden h-full w-1/2 flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Project
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This has saved me countless hours of work.&rdquo;
              </p>
              <footer className="text-sm">Mark Sinista</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex-grow w-1/2">
          <div className="mx-auto flex flex-col justify-center space-y-6 md:w-[350px] sm:w-full px-2">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Authentication
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your username & password below
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <p className="px-8 text-center text-sm text-muted-foreground">
              <i>Powered by</i> <b>Pyzasoft</b> &copy;2024
            </p>
          </div>
        </div> 
      </div>
    </> 
  );
};
