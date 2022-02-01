import WhatsNewBlockItem from '../_Item/WhatsNewBlockItem';
import TextBlock from '../../TextBlock/TextBlock';
import Mark from '../../ui/Mark/Mark';
import cabinetImg from '../../../public/images/whatsnew/cabinet.png';
import WhatsNewBlockFeature, {
  CIRCLE_COLOR,
  CONTENT_ALIGN,
} from '../_Feature/WhatsNewBlockFeature';

const topContent = <>
  {'В меню добавили ваш профиль — '}
  <Mark>можете в любой момент посмотреть логин, пароль и ваш тариф.</Mark>
</>;
const bottomContent = 'А ещё теперь видна дата, до которой тариф оплачен. Можете оплатить следующий месяц заранее, чтобы не потерять доступ к платным функциям.';
const title = 'Личный кабинет';

function WhatsNewBlockCabinet() {
  return <WhatsNewBlockItem title={title}>
    <WhatsNewBlockFeature
        image={cabinetImg}
        contentAlign={CONTENT_ALIGN.LEFT}
        circleColor={CIRCLE_COLOR.TURQUOISE}
    >
      <TextBlock topContent={topContent} bottomContent={bottomContent}/>
    </WhatsNewBlockFeature>
  </WhatsNewBlockItem>;
}

export default WhatsNewBlockCabinet;