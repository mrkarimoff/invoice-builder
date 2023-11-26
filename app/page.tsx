import DetailsForm from './_components/detailsForm';
import InvoiceManagementView from './_components/invoiceManagementView';

const Page = () => {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="my-2 text-center text-xl font-semibold uppercase">
          Invoice Form
        </h2>
        <div className="flex flex-col gap-5">
          <div className="rounded-md bg-blue-50 p-4">
            <DetailsForm />
          </div>
          <InvoiceManagementView />
        </div>
      </div>
    </div>
  );
};

export default Page;
