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
      <div className="container mx-auto px-4 pt-4 ">
        <h1 className="title font-bold">Atomic Designの制約</h1>
        <div className="text-center py-10 text-lg">
          以下の制約を元にコンポーネントをAtomic Designを設定しています
        </div>
        <div className="flex justify-center w-full text-center">
          <div className="grid grid-cols-1 divide-y divide-blue-400 w-full max-w-5xl">
            <div className="grid grid-cols-3 px-3 py-2">
              <div className="font-bold text-lg">カテゴリー</div>
              <div className="font-bold text-lg">依存関係</div>
              <div className="font-bold text-lg">依存数</div>
            </div>
            <div className="grid grid-cols-3 px-3 py-2">
              <div className="text-lg">Atoms</div>
              <div className="text-lg text-gray-400">-</div>
              <div className="text-lg ">0</div>
            </div>
            <div className="grid grid-cols-3 px-3 py-2">
              <div className="text-lg">Molecules</div>
              <div className="text-lg">Atoms</div>
              <div className="text-lg ">2つ以上</div>
            </div>
            <div className="grid grid-cols-3 px-3 py-2">
              <div className="text-lg">Organisms</div>
              <div className="text-lg">Atoms, Molecules, Organisms</div>
              <div className="text-lg ">いくつでも</div>
            </div>
            <div className="grid grid-cols-3 px-3 py-2">
              <div className="text-lg">Templates</div>
              <div className="text-lg">Organisms</div>
              <div className="text-lg ">いくつでも</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Constraint;
