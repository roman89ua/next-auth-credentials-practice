import { type NextRequestWithAuth, withAuth } from 'next-auth/middleware';

const middleware = async (request: NextRequestWithAuth) => {
  console.info('Middleware request:', request);
  // your middleware function logic
};

export const config = {
  matcher: ['/settings', '/profile'],
};

export default withAuth(middleware);
