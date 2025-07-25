import { User } from "../../types";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function CustomCard({ user }: { user: User }) {
  return (
    <Card className="w-full max-w-sm shadow-lg shadow-stone-400">
      <CardHeader className="text-center">
        <CardTitle>{user.name}</CardTitle>
        <CardDescription className="justify-self-center">
          {user.email}
        </CardDescription>
      </CardHeader>
      <CardContent className="self-center">
        <div className="text-sm text-stone-800">
          Works at: {user.company.name}
        </div>
      </CardContent>
      <CardFooter className="flex-row justify-center">
        <Link href={`/user/${user.id}`}>
          <CustomButton>Learn more</CustomButton>
        </Link>
      </CardFooter>
    </Card>
  );
}
