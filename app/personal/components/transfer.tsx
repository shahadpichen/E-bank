"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { AddToTransactions } from "../actions";
import { toast } from "@/components/ui/use-toast";
import useUser from "@/app/hook/useUser";

interface Props {
  netAmount: number;
}

function Transfer(props: Props) {
  const [isPending, startTransition] = useTransition();
  const [transferTo, setTransferTo] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const { isFetching, data } = useUser();
  let owner = data?.display_name;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.netAmount > amount && owner !== transferTo) {
      startTransition(async () => {
        const result1 = await AddToTransactions(
          "withdrawal",
          owner,
          transferTo,
          amount
        );

        const { error } = JSON.parse(result1);

        if (!error?.message) {
          toast({
            title: "Transferred Successsfully.",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{amount}€ has been DEBITED.</code>
              </pre>
            ),
          });
          setTransferTo("");
          setAmount(0);
        } else {
          toast({
            title: "Transaction Rejected.",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-red-500">
                  Enter the correct user name for transferring.
                </code>
              </pre>
            ),
          });
        }
      });
    }
    if (owner === transferTo) {
      toast({
        title: "Transaction not possible.",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-red-500">Send to different user.</code>
          </pre>
        ),
      });
      setTransferTo("");
      setAmount(0);
    }
    if (props.netAmount < amount) {
      toast({
        title: "Insufficient fund.",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-red-500">Enter the lesser amount.</code>
          </pre>
        ),
      });

      setTransferTo("");
      setAmount(0);
    }
  };

  return (
    <Card className="col-span-1 bg-black rounded-xl p-8 text-white">
      <h2 className="text-xl font-semibold mb-3">Transfer money</h2>
      <form className="grid grid-cols-3 gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            value={transferTo}
            onChange={(e) => setTransferTo(e.target.value)}
          />
          <Label className="text-neutral-400 text-center">Transfer to</Label>
        </div>
        <div className="flex flex-col gap-3">
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <Label className="text-neutral-400 text-center">Amount</Label>
        </div>
        <Button variant="secondary" size="icon" type="submit" className="flex">
          {!isPending ? (
            <ChevronRightIcon className="h-4 w-4" />
          ) : (
            <AiOutlineLoading3Quarters className={cn("animate-spin")} />
          )}
        </Button>
      </form>
    </Card>
  );
}

export default Transfer;
