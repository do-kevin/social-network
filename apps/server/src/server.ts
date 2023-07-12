import chalk from "chalk";
import cors from "cors";
import express from "express";
// import { PrismaClient } from "../prisma/src/generated/client";
import { router } from "src/routes";

// const prisma = new PrismaClient();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/feed", async (req, res) => {
//   const posts = await prisma.post.findMany({
//     where: { published: true },
//     include: { author: true },
//   });
//   res.json(posts);
// });

// app.post("/post", async (req, res) => {
//   const { title, content, authorEmail } = req.body;
//   const post = await prisma.post.create({
//     data: {
//       title,
//       type: "public",
//       content,
//       published: false,
//       author: { connect: { email: authorEmail } },
//       upvote: 1,
//       downvote: 0,
//     },
//   });
//   res.json(post);
// });

// app.put("/publish/:id", async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.post.update({
//     where: { id },
//     data: { published: true },
//   });
//   res.json(post);
// });

app.use(router);

const server = app.listen(PORT, () => {
  console.log(chalk.green(`http://locahost:${PORT}`));
});

export default server;
