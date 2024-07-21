import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Transaction } from "@/app/types";

interface Props {
  transactions: Transaction[];
}

const ListOfTransaction: React.FC<Props> = ({ transactions }) => {
  const sortedTransactions = [...transactions].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <ScrollArea className="h-[67vh] w-full rounded-md">
      <Card className="col-span-2 bg-black border-neutral-800 rounded-xl overflow-scroll">
        {sortedTransactions.length === 0 ? (
          <div className="h-[66vh] font-bold text-2xl flex justify-center items-center">
            EMPTY
          </div>
        ) : (
          sortedTransactions.map((transaction, index) => (
            <div
              key={index}
              className={`p-8 flex items-center border-b ${
                index % 2 === 0 ? "border-neutral-900" : "border-neutral-800"
              }`}
            >
              <div
                className={`bg-gradient-to-tl ${
                  transaction?.type === "deposit"
                    ? "from-green-700 to-green-400"
                    : "from-red-600 to-red-400"
                } text-white text-xs uppercase font-medium rounded-full py-1 px-4 mr-8`}
              >
                {`${transactions.length - index} ${
                  transaction?.type === "deposit" ? "deposit" : "withdrawal"
                }`}
              </div>
              <div className="text-lg ml-auto">
                {transaction?.money > 0
                  ? `${transaction?.money}€`
                  : `${-transaction?.money}€`}
              </div>
            </div>
          ))
        )}
      </Card>
    </ScrollArea>
  );
};

export default ListOfTransaction;
