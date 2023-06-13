import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUUMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-06-13",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-06-13",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-06-13",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2023-06-13",
  },
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUUMY_POST} />
    </>
  );
};

export default HomePage;
