import express from "express";
import { PrismaClient } from "../prisma/src/generated/client";
import chalk from "chalk";

const prisma = new PrismaClient();

const PORT = process.env.PORT || 8000;

const app = express();

app.get("/feed", async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  res.json(posts);
});

app.post("/post", async (req, res) => {
  const { title, content, authorEmail } = req.body;
  const post = await prisma.post.create({
    data: {
      title,
      type: "public",
      content,
      published: false,
      author: { connect: { email: authorEmail } },
      upvote: 1,
      downvote: 0,
    },
  });
  res.json(post);
});

app.put("/publish/:id", async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.update({
    where: { id },
    data: { published: true },
  });
  res.json(post);
});

app.post("/user", async (req, res) => {
  const { first_name, middle_name, last_name, email, role } = req.body;

  const newUser = await prisma.user.create({
    data: {
      first_name,
      last_name,
      middle_name,
      email,
      role,
    },
  });

  res.json(newUser);
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  res.json(user);
});

const server = app.listen(PORT, () => {
  console.log(chalk.green(`http://locahost:${PORT}`));
});

export default server;
