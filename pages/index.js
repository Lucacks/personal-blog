import Head from "next/head";
import { PostCard, Categories, post, PostWidget } from "@/components";

const posts = [
  { title: 'React teste', text: 'Testando o React' },
  { title: 'React com SASS', text: 'Testando o React com SASS' }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Me chamo Lucas e eu lhe dou as boas-vindas ao meu portfólio para Analista de dados. Todo o desenvolvimento foi feito por mim." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
        <div className='grid'>
          {posts.map((post) => <PostCard post={post} key={post.title} />)}
        </div>
        <div className="components">
          <PostWidget />
          <Categories />
        </div>
      </main>
    </>
  );
}
