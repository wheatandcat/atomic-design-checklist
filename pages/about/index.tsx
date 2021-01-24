import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const Constraint = () => {
  return (
    <>
      <Head>
        <title>Atomic Design Check List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-12 py-3 px-2  border border-indigo-200 flex items-center justify-end">
        <div className="mr-2">
          <Link href="https://github.com/wheatandcat/atomic-design-checklist">
            <div className="hover:bg-blue-200 rounded-full px-2 py-1 cursor-pointer">
              <Image src="/image/gitHub-mark.png" width={25} height={25} />
            </div>
          </Link>
        </div>
        <div className="flex font-bold hover:bg-blue-200 px-2 cursor-pointer">
          <Link href="/">
            <div className="text-lg pt-0.5">top</div>
          </Link>
          <Link href="/">
            <Image
              src="/image/keyboard_arrow_right.svg"
              className="pt-4"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-4 max-w-screen-md text-gray-600">
        <h1 className="title font-bold">Atomic Designとは</h1>
        <div className="text-center py-2">
          <a
            href="https://atomicdesign.bradfrost.com/table-of-contents/"
            target="_blank"
            className="text-blue-500 hover:text-blue-300 underline"
          >
            詳しくはこちら
          </a>
        </div>
        <div className="pt-10">
          <div className="text-3xl font-semibold text-gray-600">
            各カテゴリー
          </div>
          <div className="border-b-4 border-blue-300 w-full" />
          <div className="py-4">
            Atomic Designは以下のカテゴリーに合わせてコンポーネントを分割
          </div>
        </div>
        <div className="py-4 text-gray-600">
          <div className="py-2">
            <div className="text-2xl font-semibold text-gray-600">Atoms</div>
            <div className="border-b-2 border-gray-300 w-full" />
            <div className="py-4">分解できない単位のコンポーネント</div>
          </div>
          <div className="py-2">
            <div className="text-2xl font-semibold ">Molecules</div>
            <div className="border-b-2 border-gray-300 w-full" />
            <div className="py-4">
              <span className="font-bold">Atoms</span>
              のみで（2つ以上）から構成されるコンポーネント
            </div>
          </div>
          <div className="py-2">
            <div className="text-2xl font-semibold ">Organisms</div>
            <div className="border-b-2 border-gray-300 w-full" />
            <div className="py-4">
              <span className="font-bold">Atoms、Molecules、Organisms</span>
              の組み合わせから構成されるコンポーネント
              <br />
              Atomsのみの場合は、Molecules
            </div>
          </div>
          <div className="py-2">
            <div className="text-2xl font-semibold ">Templates / Pages</div>
            <div className="border-b-2 border-gray-300 w-full" />
            <div className="py-4">
              TemplatesとPagesは、1画面を構成するコンポーネント
            </div>
          </div>
        </div>
        <div className="pt-2 pb-60">
          <div className="text-3xl font-semibold text-gray-600">依存関係</div>
          <div className="border-b-4 border-blue-300 w-full" />

          <div className="py-4 text-lg">
            以下を元にコンポーネントをAtomic Designのカテゴリーを設定しています
          </div>
          <div className="flex justify-center w-full pt-6">
            <div className="grid grid-cols-1 divide-y divide-gray-400 w-full max-w-5xl">
              <div className="grid grid-cols-3 px-3 py-2">
                <div className="font-bold text-lg">カテゴリー</div>
                <div className="font-bold text-lg">依存関係</div>
                <div className="font-bold text-lg">依存数</div>
              </div>
              <div className="grid grid-cols-3 px-3 py-2">
                <div className="text-lg">Atoms</div>
                <div className="text-lg text-gray-400">-</div>
                <div className="text-lg ">依存なし</div>
              </div>
              <div className="grid grid-cols-3 px-3 py-2">
                <div className="text-lg">Molecules</div>
                <div className="text-lg">Atoms</div>
                <div className="text-lg ">いくつでも</div>
              </div>
              <div className="grid grid-cols-3 px-3 py-2">
                <div className="text-lg">Organisms</div>
                <div className="text-lg">Atoms、Molecules、Organisms</div>
                <div className="text-lg ">いくつでも</div>
              </div>
              <div className="grid grid-cols-3 px-3 py-2">
                <div className="text-lg">Templates</div>
                <div className="text-lg">Organisms</div>
                <div className="text-lg ">いくつでも</div>
              </div>
              <div className="grid grid-cols-3 px-3 py-2">
                <div className="text-lg">Pages</div>
                <div className="text-lg">Templates</div>
                <div className="text-lg ">1つ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Constraint;
