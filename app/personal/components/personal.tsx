"use client";

import React, { useEffect, useState } from "react";
import ListOfTransaction from "./list-of-transaction";
import Profile from "../../../components/profile";
import Transfer from "./transfer";
import CloseAccount from "./close-account";
import RequestLoan from "./request-loan";
import useUser from "@/app/hook/useUser";

interface Transaction {
  id: number;
  created_at: string;
  created_by: string;
  money: number;
  type: string;
  owner: string;
  recipient: string;
}

interface Props {
  transactions: Transaction[];
}

function Personal(props: Props) {
  const { isFetching, data } = useUser();

  const filteredTransactions = props.transactions.filter((transaction) => {
    return !(
      transaction.type === "deposit" && transaction.owner !== data?.display_name
    );
  });
  const newTransaction = filteredTransactions
    .map((transaction) => {
      if (
        transaction.type === "withdrawal" &&
        transaction.recipient === data?.display_name
      ) {
        return {
          ...transaction,
          type: "deposit",
        };
      }
      if (transaction.owner === data?.display_name) {
        return transaction;
      }
      return null;
    })
    .filter((transaction) => transaction !== null);
  console.log(newTransaction);

  const [totalDeposits, setTotalDeposits] = useState<number>(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState<number>(0);
  const [netAmount, setNetAmount] = useState<number>(0);
  const [interestAmount, setInterestAmount] = useState<number>(0);

  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    const calculateTotalAmounts = (newTransaction: Transaction[]) => {
      const totalDeposits = newTransaction
        .filter((transaction) => transaction?.type === "deposit")
        .reduce((sum, transaction) => sum + transaction.money, 0);

      const totalWithdrawals = newTransaction
        .filter((transaction) => transaction?.type === "withdrawal")
        .reduce((sum, transaction) => sum + transaction.money, 0);

      return {
        totalDeposits,
        totalWithdrawals,
        netAmount: totalDeposits - totalWithdrawals,
      };
    };

    const account1Totals = calculateTotalAmounts(newTransaction);

    setTotalDeposits(account1Totals.totalDeposits);
    setTotalWithdrawals(account1Totals.totalWithdrawals);
    setNetAmount(account1Totals.netAmount);

    const interestRate = 1.1;
    const calculatedInterest = account1Totals.netAmount * (interestRate / 100);
    setInterestAmount(calculatedInterest);
  }, [newTransaction]);

  return (
    <div className="font-sans text-white bg-black h-[90vh]">
      <main className="min-h-[90vh] flex flex-col gap-5 justify-center items-center">
        <div className="w-full flex justify-around items-end mt-1">
          <div>
            <p className="text-2xl font-medium">Current balance</p>
            <p className="text-sm text-gray-300">
              As of <span className="date">{currentDate}</span>
            </p>
          </div>
          <p className="text-4xl font-light">{netAmount}€</p>
        </div>
        <div className="w-full flex justify-center gap-5">
          <div className="w-[40%]">
            <ListOfTransaction transactions={newTransaction} />
          </div>
          <div className="w-[30%] flex flex-col">
            <div className=" h-[65vh] flex flex-col justify-start gap-5">
              <Transfer netAmount={netAmount} />
              <RequestLoan />
              <CloseAccount />
            </div>
          </div>
        </div>
        <div className="flex w-[70%] items-baseline justify-between mt-1">
          <div className="flex gap-2 items-center">
            <p className="text-sm uppercase font-medium">In</p>
            <p className="text-2xl  text-green-500">{totalDeposits}€</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm uppercase font-medium">Out</p>
            <p className="text-2xl  text-red-500">{totalWithdrawals}€</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-sm uppercase font-medium">Interest</p>
            <p className="text-2xl  text-green-500">
              {interestAmount.toFixed(1)}€
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Personal;
