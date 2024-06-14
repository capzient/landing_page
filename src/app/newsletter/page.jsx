import Card from '@/components/common/atoms/card';
import ExtraContentContainer from '@/components/common/organisms/extraContentContainer';

export default function NewsletterMore() {
  return (
    <ExtraContentContainer
      open={true}
      extraCpn={<Card bodyClassName={'text-white'}>this is dfsaaaaaaaaaa dfsaaaaaaaaaa dfsaaaaaaaaaa extracpn</Card>}
    ></ExtraContentContainer>
  );
}
