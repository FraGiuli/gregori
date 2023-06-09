import Text from "../components/common/Text";
const Sedi = ({ content }) => {
  return (
    <section id="sedi" className="bg-slate-900 h-full">
      <div className="border-b border-yellow-600">
        <div className="flex justify-center items-center pt-8">
          <Text
            tag="h2"
            className="title-font text-4xl text-center font-medium mb-[8px] text-white"
          >
            {content.title}
          </Text>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-48 items-center p-8 text-xl">
          <a
            href="https://goo.gl/maps/efygMvXhfqDiTK9C6"
            target="_blank"
            id="sedi1"
            className="w-full md:w-[340px] h-[340px] flex items-end justify-end rounded-xl biancoenero"
          >
            <div className="bg-white bg-opacity-75 rounded-b-xl w-full">
              <p className=" text-center p-4 text-slate-900 font-bold ">Via Marghera 22, Milano</p>
            </div>
          </a>
          <a
            href="https://goo.gl/maps/g5gpzGkdkh2JYB2o8"
            target="_blank"
            id="sedi2"
            className=" w-full md:w-[340px] h-[340px] flex items-end justify-end mt-4 md:mt-0 rounded-xl biancoenero"
          >
            <div className="bg-white bg-opacity-75 rounded-b-xl w-full">
              <p className="text-center p-4 text-slate-900 font-bold ">Piazza Dergano 5, Milano</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sedi;
