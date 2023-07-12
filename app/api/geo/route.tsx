import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams  =  request.nextUrl.searchParams
    const latitude = searchParams.get('lat')
    const longitude = searchParams.get('log')
    return NextResponse.json({latitude,longitude})
}
