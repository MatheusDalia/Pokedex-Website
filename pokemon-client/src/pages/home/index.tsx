import { CustomText } from '../../styles/globalComponents';
import { GreenButton } from '../../components';
import { Container, Content } from './style';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    router.push('/');
  }

  return (
    <Container>
      <Content>
        {session?.user && (
          <>
            <CustomText regular black>
              Signed in as {session.user.email}
            </CustomText>
            <CustomText regular black>
              database id: {session.id}
            </CustomText>
            <GreenButton onClick={() => signOut({ callbackUrl: '/' })}>
              Sign out
            </GreenButton>
          </>
        )}
      </Content>
    </Container>
  );
}
