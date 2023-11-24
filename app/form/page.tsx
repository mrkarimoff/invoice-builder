import Link from 'next/link';
import DetailsForm from './_components/detailsForm';

const FormPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Link className="rounded-md border border-blue-100 p-2" href={'/'}>
        See Invoice
      </Link>
      <h2 className="my-2 text-center text-xl font-semibold">Invoice Form</h2>
      <div className="rounded-md bg-slate-50 p-3">
        <DetailsForm />
      </div>
    </div>
  );
};

export default FormPage;
