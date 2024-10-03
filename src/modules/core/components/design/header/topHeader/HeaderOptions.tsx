interface HeaderOptionProps {
    text: string,
    Icon: React.ElementType,
}

export default function HeaderOptions({text, Icon}: HeaderOptionProps) {
  return (
    <>
      <div className="flex items-center gap-2 hover:text-blue-500 cursor-pointer">
        <Icon className="w-10 h-10 p-2 bg-gradient-to-b from-gray-300 rounded-full" />
        <p className="font-bold">{text}</p>
      </div>
    </>
  );
}
