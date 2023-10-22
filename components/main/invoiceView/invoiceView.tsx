import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "../../ui/button";

type InvoiceViewProps = {
  setShowView: React.Dispatch<React.SetStateAction<boolean>>;
};

const InvoiceView = ({ setShowView }: InvoiceViewProps) => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setShowView(false)} variant={"secondary"}>
          Edit Invoice
        </Button>
        <Button variant={"default"} onClick={handlePrint}>
          Print this out!
        </Button>
      </div>
      <div ref={componentRef} className="flex flex-col gap-2 items-start p-24">
        <h1 className="uppercase text-4xl font-bold text-cyan-700 tracking-wider text-right w-full">
          Invoice
        </h1>
      </div>
    </>
  );
};

export default InvoiceView;
