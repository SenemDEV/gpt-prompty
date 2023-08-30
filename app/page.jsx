import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Find-out and Share
        <br className="max-md:hidden" />
        <span className="greens_gradient text-center"> AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        GPT-Prompty is an open-source AI prompting tool that empowers users to
        generate, discover and share precise creative prompts for optimal
        results.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
