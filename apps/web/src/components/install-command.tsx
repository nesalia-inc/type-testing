"use client"

import { Copy, Check } from "lucide-react"
import { useState } from "react"

export function InstallCommand() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText("npm install @deessejs/type-testing")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative flex items-center gap-3 rounded-md border border-border bg-background px-3 py-2 shadow-xs dark:bg-input/30">
      <code className="text-xs text-foreground">
        npm install @deessejs/type-testing
      </code>
      <button
        onClick={copyToClipboard}
        className="rounded-md p-1 transition-colors hover:bg-accent dark:hover:bg-input/50"
        aria-label="Copy command"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
        ) : (
          <Copy className="h-3.5 w-3.5 text-muted-foreground" />
        )}
      </button>
    </div>
  )
}
