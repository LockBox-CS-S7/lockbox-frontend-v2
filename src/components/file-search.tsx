"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface FileSearchProps {
  onSearch?: (query: string) => void
  placeholder?: string
}

export function FileSearch({ onSearch = () => {}, placeholder = "Search files..." }: FileSearchProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full max-w-md items-center">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-12"
        />
      </div>
      <Button type="submit" variant="ghost" size="sm" className="absolute right-1 h-7">
        Search
      </Button>
    </form>
  )
}
