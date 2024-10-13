import connect from "@/db_connect/db_connection"
import User from "@/models/userModel"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server"

connect()
export const POST = async (req: NextRequest) => {
    try {
        const request = await req.json()
        const { email, password } = request
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "user not found" }, { status: 404 })
        }
        if (user.isLogin) {
            return NextResponse.json({ message: "user already login" }, { status: 400 })
        }
        const decodePass = await bcryptjs.compare(password, user.password)
        if (!decodePass || !user.isverify) {
            return NextResponse.json({ message: "invalid credentials" }, { status: 401 })
        }

        const dataToken = {
            id: user._id
        }
        const token = jwt.sign(dataToken, process.env.SECRET_TOKEN!, { expiresIn: '1d' })
        const response = NextResponse.json({ message: "login successfully", success: true }, { status: 200, })
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: true,
        })
        user.isLogin = true
        await user.save()
        return response
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}