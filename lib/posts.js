import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "data/posts");

export function getMDXFilePaths() {
  const paths = fs.readdirSync(postDirectory);
  return paths.map((path) => {
    return {
      params: {
        slug: path.replace(".mdx", ""),
      },
    };
  });
}

export async function getMDXData(slug) {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const data = fs.readFileSync(fullPath, "utf8");

  return data;
}
