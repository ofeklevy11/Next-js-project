import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const CustomCard = ({
  title,
  content,
  footer,
  description,
}: {
  title: string;
  content: React.ReactNode;
  footer?: string | JSX.Element ;
  description?: string | JSX.Element;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center mb-4 text-xl">{title}</CardTitle>
        <CardDescription className="text-green-500 text-2xl mx-auto">{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
};

export default CustomCard;
