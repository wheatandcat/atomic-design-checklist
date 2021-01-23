import Image from "next/image";

const SNS = () => {
  const open = () => {
    const url =
      "http://twitter.com/share?text=Atomic Design Checklist%0a&url=https://atomic-design-checklist.vercel.app&hashtags=AtomicDesignChecklist";

    window.open(url, "Twitter", "width=600,height=480,scrollbars=yes");
  };

  return (
    <div className="hover:opacity-60" onClick={() => open()}>
      <Image src="/image/twitter.svg" width={30} height={30} />
    </div>
  );
};

export default SNS;
