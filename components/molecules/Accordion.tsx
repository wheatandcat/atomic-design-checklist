import { useState } from "react";
import Image from "next/image";

type State = {
  item1: boolean;
  item2: boolean;
};

const initialState = (): State => ({
  item1: false,
  item2: true,
});

const Accordion = () => {
  const [state, setState] = useState<State>(initialState());

  const up = "/image/keyboard_arrow_up.svg";
  const down = "/image/keyboard_arrow_down.svg";

  return (
    <div className="w-full grid grid-cols-1 divide-y divide-gray-300 box-border border-2 border-gray-300 mx-1">
      <div
        className="w-full px-2 py-1"
        onClick={() => setState((s) => ({ ...s, item1: !s.item1 }))}
      >
        <div className="flex justify-between items-center">
          <div>Item 1</div>
          <div className="pt-1">
            <Image src={state.item1 ? up : down} width={15} height={15} />
          </div>
        </div>
        {state.item1 && (
          <div className="py-2 text-sm">sample sample sample sample</div>
        )}
      </div>

      <div
        className="w-full px-2 py-1"
        onClick={() => setState((s) => ({ ...s, item2: !s.item2 }))}
      >
        <div className="flex justify-between items-center">
          <div>Item 2</div>
          <div className="pt-1">
            <Image src={state.item2 ? up : down} width={15} height={15} />
          </div>
        </div>
        {state.item2 && (
          <div className="py-2 text-sm">sample sample sample sample</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
