import Link from 'next/link';

const FormPage = () => {
  return (
    <div className="container mx-auto p-4">
      <Link className="rounded-md border border-red-100 p-2" href={'/'}>
        See Invoice
      </Link>
      <h2>Invoice form</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        iste.
      </p>
    </div>
  );
};

export default FormPage;
