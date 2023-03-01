export const Desafio4ContactBubble = ({ user, time, msg }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[10px] max-sm:w-[50%] w-fit">
        <p className="text-xs text-left">
          {user} - {time}
        </p>
        <p className="p-[14px] w-fit rounded-lg bg-[#633BBC] rounded-tl-none">
          {msg}
        </p>
      </div>
    </div>
  )
}