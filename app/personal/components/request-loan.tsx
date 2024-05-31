"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RequestLoans } from "../actions";
import useUser from "@/app/hook/useUser";
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

function RequestLoan() {
  const [isPending, startTransition] = useTransition();

  const [amountRequest, setAmountRequest] = useState<number>(0);
  const { isFetching, data } = useUser();
  let owner = data?.display_name;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result1 = await RequestLoans("deposit", owner, amountRequest);

      const { error } = JSON.parse(result1);

      if (!error?.message) {
        toast({
          title: "Loan Recieved Successsfully.",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {amountRequest}€ has been DEBITED.
              </code>
            </pre>
          ),
        });
        setAmountRequest(0);
      }
    });
  };
  return (
    <Card className="col-span-1 bg-black rounded-xl p-8 text-white">
      <h2 className="text-xl font-semibold mb-3">Request loan</h2>
      <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input
            type="number"
            value={amountRequest}
            onChange={(e) => setAmountRequest(parseFloat(e.target.value))}
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

export default RequestLoan;
