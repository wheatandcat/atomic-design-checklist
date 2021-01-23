import Image from "next/image";
import SNS from "./SNS";

const SocialButtons = () => {
  const open = () => {
    const url =
      "https://www.facebook.com/sharer.php?quote=Atomic Design Checklist&u=https://atomic-design-checklist.vercel.app";

    window.open(url, "Twitter", "width=600,height=480,scrollbars=yes");
  };

  return (
    <div className="h-30">
      <div className="py-2">
        <SNS />
      </div>
      <div className="py-2 hover:opacity-60" onClick={() => open()}>
        <Image src="/image/facebook.svg" width={30} height={30} />
      </div>
    </div>
  );
};

export default SocialButtons;
