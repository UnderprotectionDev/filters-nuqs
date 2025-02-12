"use client";

import { parseAsInteger, useQueryState } from "nuqs";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductsFilter() {
  const [search, setSearch] = useQueryState("search", {
    defaultValue: "",
  });
  const [perPage, setPerPage] = useQueryState(
    "perPage",
    parseAsInteger.withDefault(10)
  );

  return (
    <div className="flex gap-2 justify-between">
      <div>
        <Input
          placeholder="Search"
          className="w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <Select
          value={perPage.toString()}
          onValueChange={(value) => setPerPage(parseInt(value))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Per Page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="40">40</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
