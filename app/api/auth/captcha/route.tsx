import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'
import * as  svgCaptcha from 'svg-captcha'

export async function GET() {
    const captcha = svgCaptcha.create({
        width: 100,
        height: 30,
        fontSize: 25,
        color: true,
    })

    console.log(captcha.text)

    return NextResponse.json({ svg:'svg' })
}
