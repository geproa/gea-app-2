import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect } from "react";

function Error({ statusCode }) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main>
      <div>
        <p>{statusCode}</p>
        <div>
          {statusCode ? (
            <p>
              Page not found! An error
              <span >{statusCode}</span> occurred on
              server!
            </p>
          ) : (
            <p>An error occurred on client!</p>
          )}
        </div>
        <Link href="/" >
          <button >
            <p>Go back</p>
          </button>
        </Link>
      </div>
    </main>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
