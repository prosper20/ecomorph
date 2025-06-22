export const highlightLastChar = (text: string) => {
  const main = text.slice(0, -1);
  const last = text.slice(-1);
  return (
    <>
      {main}
      <span className="text-blue-500">{last}</span>
    </>
  );
};

export const highlightFirstAndLastChar = (text: string) => {
  if (text.length === 0) return null;
  if (text.length === 1) {
    return <span className="text-blue-500">{text}</span>;
  }

  const first = text[0];
  const middle = text.slice(1, -1);
  const last = text.slice(-1);

  return (
    <>
      <span className="text-blue-500">{first}</span>
      {middle}
      <span className="text-blue-500">{last}</span>
    </>
  );
};


export const statsClasses = (index: number) => {
  let classes = "";
               switch(index){
                case 0: 
                    classes = "!mb-2 xl:!mb-24 text-black font-bold text-[18px] md:text-3xl xl:max-w-[500px]";
                    break;
                case 1: 
                    classes = "font-bold !mb-2 text-black text-[18px] md:text-3xl xl:max-w-[500px]";
                    break;
                case 2:
                    classes = "text-blue-500 font-bold text-[18px] md:text-3xl xl:max-w-[500px]"
                    break;
                default:
                    classes = ""
               }
    return classes;
}

export const decoratedFullstop = (className: string): React.ReactNode => {
  return <span className={`rounded-full bg-blue-500 ${className}`}></span>
}