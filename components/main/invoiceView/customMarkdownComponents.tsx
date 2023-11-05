import { DetailedHTMLProps, HTMLAttributes } from 'react';

const customMarkdownComponents = {
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ) => <p className="text-sm">{props.children}</p>,
  ul: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
  ) => <ul className="text-sm">{props.children}</ul>,
  li: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>,
  ) => <li className="before:mr-1.5 before:content-['•']">{props.children}</li>,
};

export default customMarkdownComponents;
