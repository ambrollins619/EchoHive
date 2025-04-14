import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "keshavmahansaria@gmail.com",
        pass: "rtsu yyfr ssis vrzw",
    },
});

const SendMail = async () => {
    try {
        const info = await transporter.sendMail({
            from: '"Keshav Mahansaria 👻" <keshavmahansaria@gmail.com>', // sender address
            to: "keshavmahansaria2@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log(info)
    } catch (error) {
        console.log(error)
    }
}