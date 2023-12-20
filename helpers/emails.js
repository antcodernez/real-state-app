import nodemailer from "nodemailer";
import { config } from "../config/config.js";
const emailRegister = async (data) => {
    const transport = nodemailer.createTransport({
        host: config.emailHost,
        port: config.emailPort,
        auth: {
          user: config.emailUser,
          pass: config.emailPass
        }
      });

    const {name, email, token} = data;
    
    //send email
    await transport.sendMail({
      from: "real-state.com",
      to: email,
      subject: "Confirm your account with us",
      text: "Confirm your account on real-state.com",
      html: `
      <h1>Welcome with us ${name}</h1>
      <p>Your account it's ready, just have to confirm in the following link</p>
      <a href="${config.urlBackend}:${config.port}/auth/confirm/${token}">Confirm your accout here :D</a>

      <p>If you don't create this account you can ignore the message</p>

      `
    })
}

export {
    emailRegister
}