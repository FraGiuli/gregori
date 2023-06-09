import Text from "./common/Text";

const Hero = ({ content }) => {
  return (
    <section id="hero">
      <div className="min-h-[800px] md:min-h-[700px] reltive p-[18px] pt-[120px] sm:pt-[200px] lg:pl-[60px] animation-opacitiy">
        <div className="p-[24px] md:p-[60px] bg-black bg-opacity-40 w-full max-w-[750px]">
          <Text
            className="text-white text-center text-4xl md:text-5xl font-medium title-font "
            tag="h1"
          >
            {content.title}
          </Text>
          <Text
            className="text-white text-center text-lg font-light pt-[16px] italic tracking-widest hidden md:block title-font "
            tag="h2"
          >
            {content.subtitle}
          </Text>
        </div>
      </div>
      <div className="p-[16px]">
        <Text
          className="text-center text-2xl font-light italic tracking-widest block md:hidden title-font "
          tag="h2"
        >
          {content.subtitle}
        </Text>
      </div>
      <div id="spacer" className="border-t-[3px] border-slate-950"></div>
    </section>
  );
};

export default Hero;
