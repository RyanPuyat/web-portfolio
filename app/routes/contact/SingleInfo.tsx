interface MyComponentProps {
  text: string;
  Image: React.ComponentType<any>; // or a more specific type
}

const SingleInfo = ({ text, Image }: MyComponentProps) => {
  return (
    <div className="flex items-center justify-center gap-2 text-center tracking-tighter">
      <Image className="text-xl" />
      <p className="my-1">{text}</p>
    </div>
  );
};

export default SingleInfo;
