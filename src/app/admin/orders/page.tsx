'use client'

import { useState, useMemo } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Select } from '@/components/ui/Select'
import { useToast } from '@/components/ui/Toast'
import { formatPrice, formatDateShort } from '@/lib/utils'
import { mockOrders } from '@/lib/mockData'
import type { Order } from '@/lib/mockData'

const statusLabels = {
  PENDING: 'მოლოდინში',
  COMPLETED: 'დასრულებული',
  CANCELLED: 'გაუქმებული',
  REFUNDED: 'დაბრუნებული',
}

export default function AdminOrdersPage() {
  const { addToast } = useToast()
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [filter, setFilter] = useState('')

  const filteredOrders = useMemo(() => {
    if (!filter) return orders
    return orders.filter((o) => o.status === filter)
  }, [orders, filter])

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((o) =>
        o.id === orderId ? { ...o, status: newStatus as Order['status'] } : o
      )
    )
    addToast('success', 'სტატუსი განახლდა')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">შეკვეთები</h1>
        <div className="w-48">
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            options={[
              { value: '', label: 'ყველა' },
              { value: 'PENDING', label: 'მოლოდინში' },
              { value: 'COMPLETED', label: 'დასრულებული' },
              { value: 'CANCELLED', label: 'გაუქმებული' },
              { value: 'REFUNDED', label: 'დაბრუნებული' },
            ]}
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <p className="text-sm text-slate-500">სულ {filteredOrders.length} შეკვეთა</p>
        </CardHeader>
        <CardContent>
          {filteredOrders.length === 0 ? (
            <p className="text-slate-500 text-center py-8">შეკვეთები არ მოიძებნა</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">შეკვეთა</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">მომხმარებელი</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">კურსი</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">თანხა</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">პრომო</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">თარიღი</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-slate-500">სტატუსი</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-b border-slate-50 hover:bg-slate-50">
                      <td className="py-3 px-4 text-sm font-medium text-slate-800">
                        #{order.orderNumber}
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm font-medium text-slate-800">{order.user?.name}</p>
                        <p className="text-xs text-slate-500">
                          {order.user?.email || order.user?.phone}
                        </p>
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-600 max-w-xs truncate">
                        {order.course?.title}
                      </td>
                      <td className="py-3 px-4">
                        <p className="text-sm font-medium text-slate-800">
                          {formatPrice(order.finalAmount)}
                        </p>
                        {order.discount > 0 && (
                          <p className="text-xs text-slate-500 line-through">
                            {formatPrice(order.amount)}
                          </p>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-600">
                        {order.promocode?.code || '-'}
                      </td>
                      <td className="py-3 px-4 text-sm text-slate-500">
                        {formatDateShort(order.createdAt)}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className={`text-sm px-2 py-1 rounded-full border-0 ${
                            order.status === 'COMPLETED'
                              ? 'bg-emerald-100 text-emerald-700'
                              : order.status === 'PENDING'
                              ? 'bg-amber-100 text-amber-700'
                              : order.status === 'CANCELLED'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {Object.entries(statusLabels).map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
