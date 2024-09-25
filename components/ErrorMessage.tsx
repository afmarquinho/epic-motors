type Props = { message: string | undefined };
const ErrorMessage = (props: Props) => {
  return <p className="text-red-500 text-xs">{props.message}</p>;
};
export default ErrorMessage;
