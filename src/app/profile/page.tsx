import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login?callbackUrl=/profile');
  }

  return (
    <section>
      <h1>Profile page</h1>
      <p>This page is server page and use getServerSession()</p>
    </section>
  );
};

export default ProfilePage;
