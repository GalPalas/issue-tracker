"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import React from "react";

const statuses: { lable: string; value?: Status }[] = [
  { lable: "All" },
  { lable: "Open", value: "OPEN" },
  { lable: "In Progress", value: "IN_PROGRESS" },
  { lable: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status === "All" ? "" : `?status=${status}`;
        router.push("/issues/list" + query);
      }}
    >
      <Select.Trigger placeholder="Filter by status..."></Select.Trigger>
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.lable} value={status.value || "All"}>
            {status.lable}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
