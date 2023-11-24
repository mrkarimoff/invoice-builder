import Link from 'next/link';
import DetailsForm from './_components/detailsForm';
import ItemForm from './_components/itemForm';

const FormPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Link className="rounded-md border border-blue-100 p-2" href={'/'}>
        See Invoice
      </Link>
      <h2 className="my-2 text-center text-xl font-semibold">Invoice Form</h2>
      <div className="flex flex-col gap-5">
        <div className="rounded-md bg-slate-50 p-4">
          <DetailsForm />
        </div>
        <div className="rounded-md bg-slate-50 p-4">
          <ItemForm />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
