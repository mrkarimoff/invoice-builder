import Link from 'next/link';
import DetailsForm from './_components/detailsForm';

const FormPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Link className="rounded-md border border-red-100 p-2" href={'/'}>
        See Invoice
      </Link>
      <h2 className="text-center text-lg">Invoice form</h2>
      <div className="rounded-md bg-slate-50 p-3">
        <DetailsForm />
      </div>
    </div>
  );
};

export default FormPage;
