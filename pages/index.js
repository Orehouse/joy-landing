import HeadBlock from '../components/HeadBlock/HeadBlock';
import ReloadBlock from '../components/ReloadBlock/ReloadBlock';
import WhatsNewBlock from '../components/WhatsNewBlock/WhatsNewBlock';
import MainContainer from '../components/MainContainer/MainContainer';
import NewServiceBlock from '../components/NewServiceBlock/NewServiceBlock';

export default function Home() {
  return (
      <MainContainer>
        <HeadBlock/>
        <ReloadBlock/>
        <WhatsNewBlock/>
        <NewServiceBlock/>
      </MainContainer>
  );
}
