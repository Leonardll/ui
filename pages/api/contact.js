import cookie from "cookie";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    })
  );
  const body = JSON.parse(JSON.stringify(req.body));
  const message = `
  FirstName: ${body.data.firstName}\r\n
  Email: ${body.data.email}\r\n
  phone:${body.data.phone}
  Message: ${body.data.message}\r\n
`;

  const data = {
    to: "convex@leonardlator.dev",
    from: "convex@leonardlator.dev",
    subject: `New message from ${body.data.firstName} ${body.data.phone}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };
  (async () => {
    
      try {
        await mail.send(data);
        res.status(200).json({ status: "OK" });
      } catch (error) {
        console.log("server error", error);
        if (error.response) {
          console.log(error.response.body);
        }
        res.status(400).json({ status: "ERROR", message: error.message });
      }
  })
};