import React, { useState } from 'react'
import { loadExpenses } from '@/lib/expenseUtils'
import { saveExpenses } from '@/lib/expenseUtils'
type Props = {}

export default function page({}: Props) {
    const [expenses, setExpenses] = useState(loadExpenses);
    function
p  return (
    <div>page</div>
  )
}