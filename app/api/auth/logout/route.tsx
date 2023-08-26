import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
       message:'LOGOUT'
    }

    return NextResponse.json({ data })
}
