import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { deleteAccount } from "../actions";
import useUser from "@/app/hook/useUser";
import { toast } from "@/components/ui/use-toast";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

function CloseAccount() {
  const [email, setEmail] = useState<string>("");
  const { isFetching, data } = useUser();
  const queryClient = useQueryClient();
  const router = useRouter();

  console.log(data);
  const handleLogout = async () => {
    const supabase = supabaseBrowser();
    queryClient.clear();
    await supabase.auth.signOut();
    router.refresh();
    // redirect("/");
    router.push("/");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email submitted:", email);

    setEmail("");
    if (email === data?.email) {
      console.log(data?.email, data?.id);
      try {
        deleteAccount(data?.id);
        handleLogout();
      } catch (error) {
        console.error("Error deleting account:", error);
      }
    } else {
      toast({
        title: "Enter correct Email id.",
      });
    }
  };

  return (
    <Card className="col-span-1 bg-black border-neutral-800 rounded-xl p-8 text-white">
      <h2 className="text-xl font-semibold mb-3">Close account</h2>
      <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Label className="text-neutral-400 text-center">Confirm email</Label>
        </div>

        <Button variant="secondary" size="icon" type="submit">
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
}

export default CloseAccount;
