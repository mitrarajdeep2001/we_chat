import Stories from "@/components/Stories";
import Searchbar from "@/components/Searchbar";
import Chats from "@/components/Chats";


export default function Home() {
  return (
    <main className="py-5 bg-background-light dark:bg-background-dark">
      <Searchbar />
      <Stories />
      <hr className="my-5 border-border-light dark:border-border-dark mx-5" />
      <Chats />
    </main>
  );
}
