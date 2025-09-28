import {blogs} from "@/.velite/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import AdSense from "../components/Elements/AdSense";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={blogs} />
      
      {/* Ad after hero section */}
      <div className="w-full max-w-6xl px-5 md:px-10 my-8">
        <AdSense />
      </div>
      
      <FeaturedPosts blogs={blogs} />
      
      {/* Ad between sections */}
      <div className="w-full max-w-6xl px-5 md:px-10 my-8">
        <AdSense adSlot="3044247808" />
      </div>
      
      <RecentPosts blogs={blogs} />
    </main>
  )
}
