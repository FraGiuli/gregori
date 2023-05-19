import Text from "../components/common/Text";
import SliderEvent from "../components/common/SliderEvent";
import SliderNormal from "../components/common/SliderNormal";
import { EVENTI, PROVA } from "../constants/Content";

const Collezioni = ({ content }) => {
  return (
    <div
      id="eventi"
      className="container max-w-6xl mx-auto px-6 text-slate-900 md:px-8 bg-white md:py-[70px] py-[32px]"
    >
      <Text
        tag="h1"
        className="uppercase text-3xl text-slate-950 text-center font-normal mb-[8px]"
      >
        {content.title}
      </Text>
      <Text className="font-sans text-center text-slate-900 font-bold italic text-2xl mb-[50px]">
        {content.subtitle}
      </Text>
      <div className="hidden lg:block">
        <SliderEvent images={EVENTI} desktop={true} />
      </div>
      <div className="block lg:hidden">
        <SliderEvent images={EVENTI} />
      </div>
    </div>
  );
};

export default Collezioni;