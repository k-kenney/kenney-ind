import qualityPDF from "../../../assets/img/quality.png"

const Quality = () => {
  return (
    <div className="m-auto flex items-center justify-center flex-col w-2/3 pt-14 pb-12 lg:flex-row">
      <h1 className="text-3xl xl:text-4xl p-9 text-center uppercase">
        Quality
      </h1>
      <p className="text-2xl text-center xl:text-3xl w-5/6 py-5 font-special lg:border-l lg:pl-14">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eaque,
        accusantium reiciendis beatae obcaecati doloribus nisi quod
        reprehenderit pariatur enim dolor distinctio. Corporis ex accusantium
        repellendus beatae deserunt delectus commodi?
      </p>
      <a href={qualityPDF} rel="noreferrer" target="_blank">
        <button className="homepage-btn mt-10">Learn more</button>
      </a>
    </div>
  );
};

export default Quality;
