"use server";
import { getSelf } from "@/lib/auth-service";
import { blockUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
      // toDo: Adapt to disconnect from livestream
  // toDo: Allow ability to kick the guest
  const self = await getSelf();

    const blockedUser = await blockUser(id);

    revalidatePath("/");

    if (blockedUser) {
      revalidatePath(`/${blockedUser.blocked.username}`);
    }

    return blockedUser;

};

export const onUnBlock = async (id: string) => {
    const unblockedUser = await unblockUser(id);
  
    revalidatePath("/");
  
    if (unblockedUser) {
      revalidatePath(`/${unblockedUser.blocked.username}`);
    }
  
    return unblockedUser;
  };
  