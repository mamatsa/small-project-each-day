interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-marine-blue md:text-3xl">
        {title}
      </h1>
      <p className="mb-3 mt-1 text-cool-gray md:mb-5">{description}</p>
    </>
  );
};

export default Title;
