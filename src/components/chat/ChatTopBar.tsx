
import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Info, X } from "lucide-react";
import { useSelectedUser } from "@/store/useSelectedUser";

const ChatTopBar = () => {
  const { selectedUser,setSelectedUser } = useSelectedUser();
 
  return (
    <div className="flex w-full p-4 h-20 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Avatar className="flex justify-center items-center">
          <AvatarImage
            src={selectedUser?.image || "/user-placeholder.png"}
            alt="User Image"
            className="w-10 h-10 object-cover rounded-full"
          />
        </Avatar>
        <p className="font-medium ml-1">{selectedUser?.name}</p>
      </div>

      <div className="flex gap-2">
        <Info className="text-muted-foreground cursor-pointer hover:text-primary" />
        <X className="text-muted-foreground cursor-pointer hover:text-primary" 
        onClick={()=> setSelectedUser(null)}/>
      </div>
    </div>
  );
};

export default ChatTopBar;
