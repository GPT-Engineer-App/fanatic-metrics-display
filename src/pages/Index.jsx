import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const metrics = [
    { title: "Revenue", value: "$120,000" },
    { title: "Profit", value: "$45,000" },
    { title: "Expenses", value: "$75,000" },
    { title: "Customer Acquisition Cost", value: "$200" },
    { title: "Customer Lifetime Value", value: "$1,200" },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-4xl w-full p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Financial Metrics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle>{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">{metric.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-8" />
        <p className="text-center text-gray-500">Placeholder data for demonstration purposes.</p>
      </div>
    </div>
  );
};

export default Index;