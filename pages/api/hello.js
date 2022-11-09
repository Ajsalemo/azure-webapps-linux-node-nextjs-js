// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(process.env.NEXT_PUBLIC_API_URI);
  console.log(process.env.API_URI);
  res.status(200).json({ name: "John Doe" });
}
