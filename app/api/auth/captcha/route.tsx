import svgCaptcha from '@/lib/svg-captcha'
import { NextResponse } from 'next/server'
// import * as  svgCaptcha from 'svg-captcha'

/* 
    TODO: pnpm的路径似乎有问题,无法正确识别到 .ttf 文件, 导致整个库不生效
*/
export async function GET() {
    const currentSvgCaptcha = svgCaptcha[Math.floor(Math.random() * svgCaptcha.length)]

    return NextResponse.json(currentSvgCaptcha)
}

/* 
    TODO: 验证码路径出现问题
*/
