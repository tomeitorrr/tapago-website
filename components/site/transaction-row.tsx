import type { TransactionStatus } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const statusStyles: Record<TransactionStatus, { dot: string; text: string }> = {
  Completado: { dot: "bg-success", text: "text-success" },
  Enviado: { dot: "bg-brand", text: "text-brand" },
  Procesando: { dot: "bg-amber-500 animate-pulse motion-reduce:animate-none", text: "text-amber-600" },
}

interface TransactionRowProps {
  counterparty: string
  country: string
  amount: string
  date: string
  status: TransactionStatus
}

export function TransactionRow({ counterparty, country, amount, date, status }: TransactionRowProps) {
  const s = statusStyles[status]
  return (
    <div className="flex items-center gap-3 py-2.5">
      <span
        aria-hidden
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-offwhite text-[10px] font-bold tracking-wide text-text-muted ring-1 ring-inset ring-line"
      >
        {country}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-text-dark">{counterparty}</p>
        <p className="text-[11px] text-text-muted">{date}</p>
      </div>
      <div className="text-right">
        <p className="tabular text-[13px] font-semibold text-text-dark">{amount}</p>
        <p className={cn("inline-flex items-center gap-1.5 text-[11px] font-medium", s.text)}>
          <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} aria-hidden />
          {status}
        </p>
      </div>
    </div>
  )
}
