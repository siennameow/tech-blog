const { Post } = require("../models");

const postData = [
  {
    title: "Awesome teamwork",
    content:
      "None of us, including me, ever do great things. But we can all do small things, with great love, and together we can do something wonderful.",
    user_id: 1,
  },
  {
    title: "Mirror Mirror debugging",
    content:
      "Just like Rubber Duck Debugging, Mirror Mirror Debugging is a method of debugging code by articulating a problem in spoken or written natural language. Many programmers have had the experience of explaining a problem to someone else, possibly even to someone who knows nothing about programming, and then hitting upon the solution in the process of explaining the problem. In describing what the code is supposed to do and observing what it actually does, any incongruity between these two becomes apparent.",
    user_id: 2,
  },
  {
    title: "Learn to Pace Yourself",
    content:
      "If you can’t fit everything you want to do within 40 hours per week, you need to get better at picking what to do, not work longer hours. Most of what we think we have to do, we don’t have to do at all. It’s a choice, and often it’s a poor one.",
    user_id: 3,
  },
  {
    title: "Preventing developer Burnout",
    content:
      "Keep things fresh at work. This way, you can hold on to your motivation and drive. Don’t despair if you have a monotonous coding job that keeps you using the same technologies repeatedly. There are several things you can do. You could try talking to your superior and maybe switch projects or take on different responsibilities. If this is not an option, you can do coding projects that feed your motivation in your free time (e.g., try a new programming language, learn new tools, build an open-source project, and so on). Ultimately, you should consider changing jobs if this is something you can do.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
